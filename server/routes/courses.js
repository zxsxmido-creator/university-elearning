const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const CurriculumMaterial = require('../models/CurriculumMaterial');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const colorPalette = [
  { color: '#00e5a0', dot: '#00e5a0' },
  { color: '#4ab8ff', dot: '#4ab8ff' },
  { color: '#f5a623', dot: '#f5a623' },
  { color: '#ff6b6b', dot: '#ff6b6b' },
  { color: '#c084fc', dot: '#c084fc' }
];

const pdfStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'university_elearning/curriculum_pdfs',
    resource_type: 'raw',
    public_id: `curriculum-${Date.now()}-${Math.round(Math.random() * 1e9)}`,
    format: 'pdf'
  })
});

const pdfUpload = multer({
  storage: pdfStorage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, callback) => {
    const isPdf = file.mimetype === 'application/pdf' || /\.pdf$/i.test(file.originalname || '');

    if (!isPdf) {
      return callback(new Error('Only PDF files are allowed'));
    }

    return callback(null, true);
  }
});

function slugify(value) {
  return String(value || 'general')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'general';
}

function buildCurriculumPayload(materials) {
  const groupedCategories = new Map();

  materials.forEach((material) => {
    const categoryId = slugify(`${material.subjectCode}-${material.subject}`);
    const palette = colorPalette[groupedCategories.size % colorPalette.length];

    if (!groupedCategories.has(categoryId)) {
      groupedCategories.set(categoryId, {
        category: {
          id: categoryId,
          code: material.subjectCode || 'GEN',
          dot: palette.dot,
          color: palette.color,
          name: { en: material.subject, ar: material.subject },
          desc: {
            en: material.subjectDescription || `Study materials for ${material.subject}`,
            ar: material.subjectDescription || `Study materials for ${material.subject}`
          },
          weeks: 0,
          materials: 0
        },
        weeks: new Map()
      });
    }

    const categoryEntry = groupedCategories.get(categoryId);
    const weekKey = String(material.weekNumber || 1);

    if (!categoryEntry.weeks.has(weekKey)) {
      categoryEntry.weeks.set(weekKey, {
        week: material.weekNumber || 1,
        title: material.weekTitle || `Week ${material.weekNumber || 1}`,
        progress: 0,
        items: []
      });
    }

    categoryEntry.weeks.get(weekKey).items.push({
      id: String(material._id),
      title: material.title,
      type: 'pdf',
      pages: material.pages || 0,
      size: material.sizeLabel || '',
      done: false,
      fileUrl: material.fileUrl,
      fileName: material.fileName || ''
    });

    categoryEntry.category.materials += 1;
  });

  const categories = [];
  const curriculum = {};

  groupedCategories.forEach((entry) => {
    const orderedWeeks = Array.from(entry.weeks.values()).sort((left, right) => left.week - right.week);
    entry.category.weeks = orderedWeeks.length;
    categories.push(entry.category);
    curriculum[entry.category.id] = orderedWeeks;
  });

  return { categories, curriculum };
}

// مسار تجريبي للكورسات
router.get('/', (req, res) => {
    res.json({ message: "Courses route is working perfectly!" });
});

router.get('/curriculum', async (req, res) => {
  try {
    const materials = await CurriculumMaterial.find().sort({
      subjectCode: 1,
      weekNumber: 1,
      createdAt: -1
    });

    return res.json(buildCurriculumPayload(materials));
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to load curriculum materials' });
  }
});

router.post('/curriculum', auth, admin, (req, res, next) => {
  pdfUpload.single('pdfFile')(req, res, (error) => {
    if (error) {
      return res.status(400).json({ msg: error.message || 'PDF upload failed' });
    }

    return next();
  });
}, async (req, res) => {
  try {
    const {
      title,
      subject,
      subjectCode,
      subjectDescription,
      weekNumber,
      weekTitle,
      pages,
      sizeLabel
    } = req.body;

    if (!req.file || !title || !subject) {
      return res.status(400).json({ msg: 'Title, subject, and PDF file are required' });
    }

    const material = await CurriculumMaterial.create({
      title: String(title).trim(),
      subject: String(subject).trim(),
      subjectCode: String(subjectCode || 'GEN').trim().toUpperCase(),
      subjectDescription: String(subjectDescription || '').trim(),
      weekNumber: Number(weekNumber) || 1,
      weekTitle: String(weekTitle || `Week ${Number(weekNumber) || 1}`).trim(),
      fileUrl: req.file.path,
      filePublicId: req.file.filename || '',
      fileName: req.file.originalname || '',
      sizeLabel: String(sizeLabel || '').trim(),
      pages: Number(pages) || 0,
      createdBy: req.user.id
    });

    return res.status(201).json({
      material: {
        id: String(material._id),
        title: material.title,
        subject: material.subject,
        subjectCode: material.subjectCode,
        weekNumber: material.weekNumber,
        weekTitle: material.weekTitle,
        fileUrl: material.fileUrl
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to create curriculum material' });
  }
});

module.exports = router;

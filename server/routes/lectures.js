const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const RecordedLecture = require('../models/RecordedLecture');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'university_elearning/recorded_lectures',
    resource_type: 'video',
    public_id: `lecture-${Date.now()}-${Math.round(Math.random() * 1e9)}`
  })
});

const videoUpload = multer({
  storage: videoStorage,
  limits: { fileSize: 250 * 1024 * 1024 },
  fileFilter: (req, file, callback) => {
    const isVideo = file.mimetype.startsWith('video/');

    if (!isVideo) {
      return callback(new Error('Only video files are allowed'));
    }

    return callback(null, true);
  }
});

function slugify(value) {
  return String(value || 'lecture')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'lecture';
}

function toLocalizedText(value) {
  return { en: value || '', ar: value || '' };
}

function normalizeLecture(lecture) {
  return {
    id: String(lecture._id),
    code: lecture.code || (lecture.subjectCode || 'LEC'),
    title: toLocalizedText(lecture.title),
    description: toLocalizedText(lecture.description),
    subject: slugify(lecture.subject),
    subjectLabel: lecture.subject,
    instructor: slugify(lecture.instructor),
    instructorLabel: lecture.instructor,
    durationSeconds: Math.max(0, Number(lecture.durationMinutes || 0) * 60),
    views: Number(lecture.views || 0),
    watched: Boolean(lecture.watched),
    isNew: Boolean(lecture.isNew),
    progress: Number(lecture.progress || 0),
    date: lecture.createdAt ? lecture.createdAt.toISOString() : new Date().toISOString(),
    videoUrl: lecture.videoUrl,
    sourceType: lecture.sourceType
  };
}

router.get('/', (req, res) => {
    res.json({ message: "Lectures route is working perfectly!" });
});

router.get('/library', async (req, res) => {
  try {
    const lectures = await RecordedLecture.find().sort({ createdAt: -1 });
    return res.json({ lectures: lectures.map(normalizeLecture) });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to load recorded lectures' });
  }
});

router.post('/library', auth, admin, (req, res, next) => {
  videoUpload.single('videoFile')(req, res, (error) => {
    if (error) {
      return res.status(400).json({ msg: error.message || 'Video upload failed' });
    }

    return next();
  });
}, async (req, res) => {
  try {
    const {
      title,
      description,
      subject,
      subjectCode,
      instructor,
      durationMinutes,
      videoLink
    } = req.body;

    const uploadedVideoUrl = req.file ? req.file.path : '';
    const safeVideoLink = String(videoLink || '').trim();
    const finalVideoUrl = uploadedVideoUrl || safeVideoLink;

    if (!title || !subject || !instructor || !finalVideoUrl) {
      return res.status(400).json({ msg: 'Title, subject, instructor, and a video file or link are required' });
    }

    const lecture = await RecordedLecture.create({
      title: String(title).trim(),
      description: String(description || '').trim(),
      subject: String(subject).trim(),
      subjectCode: String(subjectCode || 'LEC').trim().toUpperCase(),
      instructor: String(instructor).trim(),
      durationMinutes: Number(durationMinutes) || 0,
      videoUrl: finalVideoUrl,
      videoPublicId: req.file?.filename || '',
      sourceType: uploadedVideoUrl ? 'upload' : 'link',
      code: `${String(subjectCode || 'LEC').trim().toUpperCase()}-${String(Date.now()).slice(-4)}`,
      createdBy: req.user.id
    });

    return res.status(201).json({ lecture: normalizeLecture(lecture) });
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to create recorded lecture' });
  }
});

module.exports = router;

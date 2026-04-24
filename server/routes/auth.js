const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const User = require('../models/User'); 

// 1. إعداد Cloudinary وربطه بالخزنة (.env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. إعداد التخزين السحابي
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'university_avatars', // الفولدر اللي هيتعمل على كلاوديناري
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

const upload = multer({ storage: storage });

// ==========================================
// مساراتك القديمة (تسجيل الدخول والإنشاء)
// ==========================================

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const role = 'student'; 

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ name, email, password, role });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id, name: user.name, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }); 

    res.json({ token, user: { _id: user.id, name: user.name, role: user.role } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id, name: user.name, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: { _id: user.id, name: user.name, role: user.role } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// ==========================================
// المسار الجديد: تحديث الصورة ورفعها للسحابة
// ==========================================

router.post('/update-avatar', upload.single('profileImage'), async (req, res) => {
  try {
    // 1. الصورة اترفعت بنجاح على كلاوديناري، وده الرابط بتاعها
    const imageUrl = req.file.path; 
    
    // 2. هنجيب الـ ID بتاع اليوزر 
    const userId = req.body.userId || req.user?.id; 

    if (!userId) {
      return res.status(400).json({ success: false, message: 'معرف المستخدم غير موجود' });
    }

    // 3. بنحدث رابط الصورة في الداتا بيز
    await User.findByIdAndUpdate(userId, { avatar: imageUrl });

    // 4. بنرد على المتصفح بالرابط الجديد
    res.json({ success: true, newImageUrl: imageUrl });

  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).json({ success: false, message: 'حدث خطأ أثناء الرفع للسحابة' });
  }
});

module.exports = router;
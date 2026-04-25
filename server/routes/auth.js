const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const User = require('../models/User'); 
const auth = require('../middleware/auth'); // استدعاء الميدل وير

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'university_avatars',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    transformation: [{ width: 800, height: 800, crop: 'limit' }, { quality: 'auto' }] 
  },
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // تقليل الحد لـ 10 ميجا للأمان
});

// دالة التحقق من صحة البيانات
function validateAuthInput({ name, email, password }, requireName = false) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (requireName && (!name || name.trim().length < 2)) return 'الاسم يجب أن يكون أكثر من حرفين.';
  if (!email || !emailRegex.test(email)) return 'يرجى إدخال بريد إلكتروني صحيح.';
  if (!password || password.length < 8) return 'كلمة المرور يجب ألا تقل عن 8 أحرف.';
  return null;
}

router.post('/register', async (req, res) => {
  try {
    const error = validateAuthInput(req.body, true);
    if (error) return res.status(400).json({ msg: error });

    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'هذا الحساب موجود بالفعل' });

    user = new User({ name, email, password, role: 'student' });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = { user: { id: user.id, name: user.name, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }); 

    res.json({ token, user: { _id: user.id, name: user.name, role: user.role, avatar: user.avatar } });
  } catch (err) {
    res.status(500).send('خطأ في السيرفر');
  }
});

router.post('/login', async (req, res) => {
  try {
    const error = validateAuthInput(req.body);
    if (error) return res.status(400).json({ msg: error });

    const { email, password } = req.body;
    // نستخدم select('+password') لأننا جعلناه مخفياً في الموديل
    let user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(400).json({ msg: 'بيانات الدخول غير صحيحة' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'بيانات الدخول غير صحيحة' });

    const payload = { user: { id: user.id, name: user.name, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: { _id: user.id, name: user.name, role: user.role, avatar: user.avatar } });
  } catch (err) {
    res.status(500).send('خطأ في السيرفر');
  }
});

router.post('/update-avatar', auth, upload.single('profileImage'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'لم يتم اختيار صورة' });

    const imageUrl = req.file.path; 
    const userId = req.user.id; // نأخذ الـ ID من التوكن فقط (أمان 100%)

    await User.findByIdAndUpdate(userId, { avatar: imageUrl });
    res.json({ success: true, newImageUrl: imageUrl });

  } catch (error) {
    res.status(500).json({ success: false, message: 'فشل رفع الصورة' });
  }
});

module.exports = router;
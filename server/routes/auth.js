const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // تأكد من مسار الموديل بتاعك

// 1. مسار إنشاء حساب جديد (Register)
router.post('/register', async (req, res) => {
  try {
    // هنا إحنا مبناخدش الـ role من المستخدم خالص!
const { name, email, password } = req.body;
const role = 'student'; // إجباري أي حد بيسجل من بره يبقى طالب

    // التأكد إن الإيميل مش متسجل قبل كده
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ name, email, password, role });

    // تشفير الباسوورد قبل ما يتحفظ في الداتا بيز
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // إنشاء التوكن (JWT)
    const payload = { user: { id: user.id, name: user.name, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }); // التوكن صالح لمدة 7 أيام

    res.json({ token, user: { name: user.name, role: user.role } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// 2. مسار تسجيل الدخول (Login)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // التأكد إن المستخدم موجود
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // مقارنة الباسوورد المكتوب بالباسوورد المتشفر في الداتا بيز
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // إنشاء التوكن (JWT) لو الباسوورد صح
    const payload = { user: { id: user.id, name: user.name, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: { name: user.name, role: user.role } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // 1. استلام التوكن من الطلب
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // 2. لو مفيش توكن خالص
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // 3. فك التشفير والتأكد إن التوكن طالع من السيرفر بتاعنا
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. إرفاق بيانات المستخدم وتمريره لغرفة البث
    req.user = decoded.user;
    next();
  } catch (err) {
    // لو التوكن ملعوب فيه أو مش بتاعنا
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
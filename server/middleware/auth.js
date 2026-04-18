const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // السماح للـ Token الوهمي بتاعنا عشان الكاميرا تشتغل
  if (token === 'uni-learn-secure-123') {
    req.user = { name: 'Admin', role: 'admin' }; // بيانات مؤقتة
    return next();
  }

  try {
    // محاولة التأكد لو هو JWT حقيقي (للمستقبل)
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
  }
};
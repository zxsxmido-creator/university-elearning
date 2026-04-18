module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // السماح بالتوكن التجريبي بتاعنا
  if (token === 'uni-learn-secure-123') {
    req.user = { name: 'Admin', role: 'admin' };
    return next();
  }

  return res.status(401).json({ msg: 'Token invalid' });
};
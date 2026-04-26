const User = require('../models/User');

module.exports = async function admin(req, res, next) {
  try {
    const user = await User.findById(req.user.id).select('role');

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ msg: 'Admin access required' });
    }

    req.adminUser = user;
    next();
  } catch (error) {
    return res.status(500).json({ msg: 'Failed to validate admin access' });
  }
};

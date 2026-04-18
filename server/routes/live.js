const express = require('express');
const router = express.Router();
const { generateToken } = require('../config/agora');
const auth = require('../middleware/auth');

router.post('/token', auth, (req, res) => {
  const { channelName, uid, role } = req.body;
  if (!channelName || uid === undefined) {
    return res.status(400).json({ msg: 'channelName and uid required' });
  }
  try {
    const token = generateToken(channelName, uid, role);
    res.json({ token, appId: process.env.AGORA_APP_ID });
  } catch (err) {
    res.status(500).json({ msg: 'Token generation failed' });
  }
});

module.exports = router;
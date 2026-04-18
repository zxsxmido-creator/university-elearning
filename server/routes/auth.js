const express = require('express');
const router = express.Router();

// مسار تجريبي عشان السيرفر يشتغل بدون مشاكل
router.get('/', (req, res) => {
    res.json({ message: "Auth route is working perfectly!" });
});

module.exports = router;
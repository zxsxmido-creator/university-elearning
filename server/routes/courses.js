const express = require('express');
const router = express.Router();

// مسار تجريبي للكورسات
router.get('/', (req, res) => {
    res.json({ message: "Courses route is working perfectly!" });
});

module.exports = router;
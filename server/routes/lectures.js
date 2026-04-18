const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Lectures route is working perfectly!" });
});

module.exports = router;
const express = require('express');
const router = express.Router();

const items = require('../data/students');

router.get('/', (req, res) => {
    res.json(items);
});

module.exports = router;  // ✅ This line is mandatory

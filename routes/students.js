const express = require('express');
const router = express.Router();

const items = require('../data/students');

router.get('/', (req, res) => {
    res.json(items);
});

router.get('/:roll_number', (req, res) => {
    const rollNumber = parseInt(req.params.roll_number, 10);
    const student = items.find(s => s.roll_number === rollNumber);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'No student found' });
    }
});


module.exports = router;  // ✅ This line is mandatory

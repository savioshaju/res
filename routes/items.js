// routes/items.js
const express = require('express');
const router = express.Router();

const items = require('../data/items');

router.get('/', (req, res) => {
    res.json(items);
});

router.get('/:restaurantId/menu', (req, res) => {
    const { restaurantId } = req.params;
    const filteredItems = items.filter(item => item.restaurantID === Number(restaurantId));


    if (filteredItems.length === 0) {
        return res.status(404).json({ message: 'No items found for this restaurant' });
    }

    res.json(filteredItems);
});

module.exports = router;

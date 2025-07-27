const express = require('express');
const router = express.Router();

const restaurants = require('../data/restaurants');


router.get('/', (req, res) => {
    res.json(restaurants);
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = restaurants.find(r => r.restaurantID === id);
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ message: 'Restaurant not found' });
    }
});

module.exports = router;


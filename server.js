const express = require('express');
const cors = require('cors');   // import cors
const app = express();
const port = 3000;

app.use(cors());               // enable CORS for all routes

const restaurantRoutes = require('./routes/restaurants');
const itemsRoutes = require('./routes/items');
const students = require('./routes/students')
app.use('/restaurants', restaurantRoutes);
app.use('/items',itemsRoutes);
app.use('/students', students);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

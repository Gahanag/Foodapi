const express = require('express');
const app = express();
const PORT = 3000;

// Example data for food items
const foodItems = [
  { id: 1, name: 'Hamburger', type: 'fast-food', deliveryTime: 30 },
  { id: 2, name: 'Pizza', type: 'italian', deliveryTime: 45 },
  { id: 3, name: 'Sushi', type: 'japanese', deliveryTime: 60 },
  { id: 4, name: 'Taco', type: 'mexican', deliveryTime: 20 },
];

// Get all food items
app.get('/food', (req, res) => {
    const { type, maxdileverytime, id } = req.query;

    if (type && maxdileverytime) {
      // Get food items by type and max delivery time
      const filteredItems = foodItems.filter(item => item.type === type && item.deliveryTime <= maxdileverytime);
      res.json(filteredItems);
    } else if (type) {
      // Get food items by type
      const filteredItems = foodItems.filter(item => item.type === type);
      res.json(filteredItems);
    } else{
  res.json(foodItems);
    }
});


// Get food item by ID
app.get('/food/:id', (req, res) => {
  const id = req.params.id;
  const item = foodItems.find(item => item.id === parseInt(id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Food item not found' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

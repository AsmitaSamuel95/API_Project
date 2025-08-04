const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Route to fetch user by ID
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  console.log("ID received:", id);


  try {
    // ObjectId validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ error: 'Invalid ID format' });
    }

    // Convert id to ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    // Find user with age > 21
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });
   
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

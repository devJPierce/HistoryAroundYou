const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB (remember to update after Michael helps you set up)
mongoose.connect('mongodb://localhost:27017/______', { useNewUrlParser: true, useUnifiedTopology: true });

// Use user routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
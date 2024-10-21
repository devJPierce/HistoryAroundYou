const mongoose = require('mongoose');

// Defines the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Make sure to hash passwords in a real app
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

// Creates the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
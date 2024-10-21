// server/routes/user.routes.js
const express = require('express');
const router = express.Router();
const { createUser, updateUser, deleteUser } = require('../controllers/user.controller');

// Define routes
router.post('/users', createUser);          // Create user
router.put('/users/:id', updateUser);       // Update user by ID
router.delete('/users/:id', deleteUser);    // Delete user by ID

module.exports = router;
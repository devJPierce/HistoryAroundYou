const User = require('../models/user.model');

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Updates a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!user) return res.status(404).send();
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  // Deletes a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) return res.status(404).send();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  // Exports functions
module.exports = {
    createUser,
    updateUser,
    deleteUser
  };
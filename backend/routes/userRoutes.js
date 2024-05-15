const express = require('express');
const User = require('../models/Users');
const router = express.Router();

router.post('/users', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

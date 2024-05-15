// routes/resourceRoutes.js
const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

// Route to create a new resource
router.post('/resources', async (req, res) => {
  const { title, article, createdBy, modifiedBy } = req.body;
  try {
    const newResource = new Resource({ title, article, createdBy, modifiedBy });
    await newResource.save();
    res.status(201).send('Resource created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Route to get all resources
router.get('/resources', async (req, res) => {
  try {
    const resources = await Resource.find().populate('createdBy modifiedBy');
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to update a resource
router.patch('/resources/:id', async (req, res) => {
  const { title, article, modifiedBy } = req.body;
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, { title, article, modifiedBy, modifiedAt: Date.now() }, { new: true });
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Route to delete a resource
router.delete('/resources/:id', async (req, res) => {
  try {
    await Resource.findByIdAndDelete(req.params.id);
    res.status(204).send('Resource removed');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

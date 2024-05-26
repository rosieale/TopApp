const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();

router.post('/pets', async (req, res) => {
  const { name, age, type, owner } = req.body;
  try {
    const newPet = new Pet({ name, age, type, owner });
    await newPet.save();
    res.status(201).send('Pet added');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/pets', async (req, res) => {
  const { type } = req.query;
  try {
    let pets;
    if (type) {
      pets = await Pet.find({ type }).populate('owner');
    } else {
      pets = await Pet.find().populate('owner');
    }
    if (pets.length === 0) {
      return res.status(404).json({ message: 'No pets found' });
    }
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/pets/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('owner');
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch('/pets/:id', async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/pets/:id', async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(204).send('Pet removed');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

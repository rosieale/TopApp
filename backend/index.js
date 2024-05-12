// Import express
const mongoose = require('mongoose');
const User = require('./models/Users');
const Pet = require('./models/Pet');
const express = require('express');

// Create an express application
const app = express();
app.use(express.json());

// Define a port number
const PORT = 3000;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express server!');
});

// Make the server listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const dbURI = "mongodb://localhost:27017/PetMatch";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connected to db'))
  .catch((err) => console.log(err));

app.post('/users', async (req, res) => {
const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Route to create a new pet
app.post('/pets', async (req, res) => {
  const { name, age, type, owner } = req.body;
  try {
    const newPet = new Pet({ name, age, type, owner });
    await newPet.save();
    res.status(201).send('Pet added');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Route to get all pets
app.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner');
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to update a pet
app.patch('/pets/:id', async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Route to delete a pet
app.delete('/pets/:id', async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(204).send('Pet removed');
  } catch (error) {
    res.status(400).send(error.message);
  }
});
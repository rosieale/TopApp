// Import express
const mongoose = require('mongoose');
const express = require('express');

// Create an express application
const app = express();

//Improt Routes
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

//Middelware
app.use(express.json());

//Use Routes
app.use(userRoutes);
app.use(petRoutes);

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


const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();


// Create an express application
const app = express();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

// Middleware
app.use(express.json());

// Use Routes
app.use(userRoutes);
app.use(petRoutes);
app.use(resourceRoutes);

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

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority&ssl=true`;
//const dbURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/?retryWrites=true&w=majority&ssl=true`;

mongoose.connect(dbURI)
  .then((result) => console.log('Connected to db'))
  .catch((err) => console.log(err));

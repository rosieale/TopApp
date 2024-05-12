// Import express
const express = require('express');

// Create an express application
const app = express();

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
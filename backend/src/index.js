// Importing express
const express = require("express");

// Creating an express instance
const app = express();

// Setting up a port
const port = 3001;

// Running the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

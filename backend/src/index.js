//Importing utils file
const { getTimeOfTheDay, constructGreeting } = require("./utils/utils");

// Importing express
const express = require("express");

// Creating an express instance
const app = express();

// Setting up a port
const port = 3001;

// Setting up a route
app.get("/hello", (req, res) => {
  const name = req.query?.name || "Stranger";
  const timeOfTheDay = getTimeOfTheDay();
  const greeting = constructGreeting(name, timeOfTheDay);
  res.json({ message: greeting });
});

// Running the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

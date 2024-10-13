// Import serverless and express
const serverless = require("serverless-http");
const express = require("express");
const app = express();

// Import utilities from utils.js
const { getTimeOfTheDay, constructGreeting } = require("./utils/utils");

// Root route
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

// /hello route that uses utility functions
app.get("/hello", (req, res) => {
  const name = req.query?.name || "Stranger"; // Example of using query params
  const timeOfTheDay = getTimeOfTheDay(); // Call the utility function
  const greeting = constructGreeting(name, timeOfTheDay); // Construct greeting
  return res.status(200).json({
    message: greeting,
  });
});

// Fallback 404 route
app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// Export the app wrapped in serverless-http for AWS Lambda
exports.handler = serverless(app);

// imports
const express = require("express");
const cors = require("cors");
const env = require("./src/utils/env");
const { rateLimit } = require("express-rate-limit");

// Application
const app = express();

// Rate limit
const createLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // 5 requests per window
  message:
    "Too many accounts created from this IP, please try again after 5 minutes",
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(createLimiter);

// Routes
app.use("/api", require("./src/routes")); // Every request that starts with /api will be handled by this handler

// This route will handle all the requests that are not handled by any other route handler
app.all("*", (request, response, next) => {
  return response.status(404).json({ message: "Endpoint not found!" });
});

// Bootstrap server
app.listen(env.port, () => {
  console.log(`Server is up and running at http://localhost:${env.port}`);
});

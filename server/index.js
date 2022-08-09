// imports
const express = require("express");
const cors = require("cors");
const env = require("./src/utils/env");

// Application
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

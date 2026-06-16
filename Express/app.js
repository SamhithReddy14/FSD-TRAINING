const express = require("express");
const userRoutes = require("./routes/userRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Welcome to the basic Express practice app");
});

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

module.exports = app;

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Health route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
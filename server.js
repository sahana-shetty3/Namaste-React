const express = require("express");
const cors = require("cors");
const menuData = require("./menu.json");

const app = express();
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running ✔ /api/menu is available");
});

// Menu route
app.get("/api/menu", (req, res) => {
  res.json(menuData);
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

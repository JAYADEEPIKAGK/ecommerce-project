const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

// Serve static files from root directory
app.use(express.static(path.join(__dirname, "..")));

// Serve the ecommerce HTML at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "E-Commerce Store.html"));
});

// Keep existing API endpoint
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Phone", price: 10000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Headphones", price: 2000 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
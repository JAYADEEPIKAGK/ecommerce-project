const express = require("express");
const cors = require("cors");

const app = express();

// 👉 ADD THIS LINE
app.use(cors());

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
require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple Mongoose schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Item = mongoose.model("Item", itemSchema);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello from Express & MongoDB!");
});

// Get all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new item
app.post("/api/items", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

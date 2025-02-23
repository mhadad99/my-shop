import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(
  cors({
    origin: "http://localhost:5174", // Allow frontend access
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Sample products data
const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
];

// API Routes
app.get("/products", (req, res) => {
  res.json(products);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

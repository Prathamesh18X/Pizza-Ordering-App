const express = require("express");
const cors = require('cors');
const db = require('./pizzaDB');
const app = express();
const pizzasRoute = require('./routes/pizzaRoutes');
const userRoute = require('./routes/userRoutes');
const port = 8000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Define a route for testing
app.get("/", (req, res) => {
  res.send("Server working with status 200");
});

// Routes for pizzas and users
app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

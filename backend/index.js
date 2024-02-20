const express = require("express");
const cors = require('cors');
const db = require('./pizzaDB');
const app = express();
const pizzasRoute = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoutes')
const port = 8000


//Plugin middlewares
app.use(cors());
app.use(express.json());

// Restrict CORS to a specific origin
const corsOptions = {
  origin: 'https://pizzas-store.vercel.app',
};

app.use(cors(corsOptions));
//testing
app.get("/", (req, res) => {
  res.send("Server working with status 200");
});


//All routes
app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/users/' , userRoute)



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

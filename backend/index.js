const express = require("express");
const db = require('./pizzaDB');
const app = express();
const pizzasRoute = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoutes')
const port = 8000

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server working with status 200");
});



app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/users/' , userRoute)



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

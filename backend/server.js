const express = require("express");
const db = require('./pizzaDB');
const app = express();
const pizzasRoute = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoutes')
const port = process.env.PORT || 8000;

//plugins
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//testing
app.get("/", (req, res) => {
  res.send("Server working with status 200");
});


//Routes
app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/users/' , userRoute)



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

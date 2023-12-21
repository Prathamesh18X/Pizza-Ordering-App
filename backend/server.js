const express = require("express");
const db = require('./pizzaDB');
const app = express();
const pizza = require('./models/pizzaModels');
const pizzasRoute = require('./routes/pizzaRoutes')

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working with status 200");
});

const port = process.env.PORT || 8000;

app.use('/api/pizzas/' , pizzasRoute)

// app.get("/getdata", (req, res) => {
//   pizza.find({})
//     .then(docs => res.send(docs))
//     .catch(error => {
//       console.error(error);
//       res.status(500).send("Internal Server Error");
//     });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

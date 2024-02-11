const express = require("express");
const db = require('./pizzaDB');
const app = express();
const pizzasRoute = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoutes')
const cors = require('cors')

app.use(express.json());
app.use(cors(
  {
    orgin :["https://pizza-ordering-app-server.vercel.app"],
    methods : ["POST", "GET"],
    credentials:true
  }
))

app.get("/", (req, res) => {
  res.send("Server working with status 200");
});

const port = process.env.PORT || 8000;

app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/users/' , userRoute)

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

const mongoose = require("mongoose");
require('dotenv').config()

// Connecting string
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Succesfully !!');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = mongoose;

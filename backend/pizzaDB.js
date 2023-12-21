const mongoose = require("mongoose");


// Connecting string
const mongoURL = 'mongodb://localhost:27017/mern-pizza';

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

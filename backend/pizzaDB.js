const mongoose = require("mongoose");


// Connecting string
const mongoURL = 'mongodb+srv://Prathamesh18X:Akcc&52426@cluster0.lywr1lt.mongodb.net/mern-pizza';

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

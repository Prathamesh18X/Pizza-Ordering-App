const mongoose = require('mongoose');
const pizzaModel = require('./pizzaModel');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email:{type:String, required:true},
    password: { type: String, required: true },
    isAdmin: {type: Boolean, required: true, default: false}    
},{
    timestamps: true  //Saves createdAt and updatedAt as dates (ISO
})

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;
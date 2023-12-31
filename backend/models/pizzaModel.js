const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    variants: { type: Object, default: {} },
    prices: { type: Object, default: {} },  
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

const pizzaModel = mongoose.model('Pizza', pizzaSchema);

module.exports = pizzaModel;

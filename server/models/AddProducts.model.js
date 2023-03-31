const mongoose = require('mongoose');

const AddProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    type: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports.AddProducts = mongoose.model('AddProducts', AddProductsSchema);

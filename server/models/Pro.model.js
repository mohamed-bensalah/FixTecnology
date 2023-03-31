const mongoose = require('mongoose');

const ProSchema = mongoose.Schema({
    title: {
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
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

module.exports.Pro = mongoose.model('Pro', ProSchema);

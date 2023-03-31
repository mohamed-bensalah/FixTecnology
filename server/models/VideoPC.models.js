const mongoose = require('mongoose');

const VideoPcSchema = mongoose.Schema({
    title: {
        type: String,
        required: 'title is required'
    },
    description: {
        type: String,
        genre: String,
        required: 'description is required'
    },
    link:{
        type: String,
        require: true,
        required: 'link is required'
    },
    Image:{
        type: String,
        require: true,
        required: 'Image is required'
    },

});

module.exports.VideoPc = mongoose.model('VideoPc', VideoPcSchema);

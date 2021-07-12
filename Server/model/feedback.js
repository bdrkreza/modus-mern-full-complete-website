
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    rating: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    massage: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
})

const feedback = mongoose.model('feedbacks', feedbackSchema);
module.exports = feedback;
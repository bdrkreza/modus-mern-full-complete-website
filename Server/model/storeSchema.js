const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    catagories: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    describe: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    }
})



const store = mongoose.model('stores', storeSchema);
module.exports = store;
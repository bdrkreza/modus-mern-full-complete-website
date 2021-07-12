
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    catagories: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    id: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    describe: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
})



const store = mongoose.model('stores', storeSchema);
module.exports = store;
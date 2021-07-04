const mongoose = require('mongoose');
require('dotenv').config()

const DB = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.9akcg.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successfully')
}).catch((err) => {
    console.log('connection error')
});


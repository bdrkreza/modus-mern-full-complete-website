const mongoose = require('mongoose');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

const cors = require('cors');
require('dotenv').config();
app.use(fileUpload());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000

require('./connect');
app.use(express.json());

const store = require('./model/storeSchema');


app.use(require('./router/auth'));

app.get('/', (req, res) => {
    res.send('Server ok 200!')
});

//middleware
const middleware = (req, res, next) => {
    console.log('hello middleware');
    next();
};

// we will handle get store 
app.get("/store", async (req, res) => {
    try {
        const getStore = await store.find({})
        res.send(getStore);
    } catch (err) {
        console.log(err);
    }
});


// we will handle Post store
app.post("/CreateStore", middleware, async (req, res, next) => {
    try {
        const storeData = new store({
            catagories: req.body.catagories,
            name: req.body.name,
            price: req.body.price,
            id: req.body.id,
            qty: req.body.qty,
            size: req.body.size,
            describe: req.body.describe,
            image: req.body.image,
        })
        await storeData.save();
        res.status(201).json({ msg: 'data store successfully' });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
    next();
});


// we will handle  store findById 
app.get("/store/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await store.findById({ _id: id });
        res.send(getId);
    } catch (e) {
        res.status(400).send(e);
    }
});

// we will handle  store patch data
app.patch("/update/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUpdate = await store.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(getUpdate);
    } catch (e) {
        res.status(400).send(e);
    }
});

// we will handle  store patch data
app.delete("/delete/:id", async (req, res) => {
    try {
        const getUpdate = await store.findByIdAndDelete(req.params.id)
        res.send(getUpdate);
    } catch (e) {
        res.status(400).send(e);
    }
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
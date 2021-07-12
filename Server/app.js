const mongoose = require('mongoose');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser')

app.use(cookieParser())

const cors = require('cors');
require('dotenv').config();
app.use(fileUpload());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000

require('./connect');
app.use(express.json());

app.use(require('./router/auth'));

const store = require('./model/storeSchema');
const Cart = require('./model/ordersSchema');
const feedback = require('./model/feedback');

const Authenticate = require('./middleware/authenticate');

app.get('/', (req, res) => {
    res.send('Server ok 200!')
});


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
app.post("/CreateStore", async (req, res, next) => {
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

// User Orders find api

app.get("/orders", async (req, res) => {
    try {
        const getStore = await Cart.find({})
        res.send(getStore);
    } catch (err) {
        console.log(err);
    }
});

//user orders create api
app.post("/orders", async (req, res) => {
    console.log(req.body);
    const cart = new Cart({
        paymentId: req.body.paymentId,
        userName: req.body.shipment.name,
        userImage: req.body.image,
        userAddress: req.body.shipment.address,
        userEmail: req.body.shipment.email,
        totalPrice: req.body.price,
        products: req.body.cartItems,

    });
    cart.save((error, cart) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (cart) {
            return res.status(201).json({ cart });
        }
    })

})



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

app.get("/feedback", async (req, res) => {
    try {
        const getFeedback = await feedback.find({})
        res.send(getFeedback);
    } catch (err) {
        console.log(err);
    }
});

app.post("/feedback", async (req, res) => {
    try {
        const feedbackData = new feedback({
            rating: req.body.rating,
            name: req.body.name,
            email: req.body.email,
            massage: req.body.massage,
            image: req.body.image,
        })
        await feedbackData.save();
        res.status(201).json({ msg: 'data store successfully' });
        console.log(res);
    } catch (err) {
        console.log(err);
    }

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
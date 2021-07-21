const feedback = require("../model/feedback");
const customOrder = require("../model/ordersSchema");
const store = require("../model/storeSchema");

exports.getPosts = async (req, res) => {
    try {
        const getStore = await store.find({})
        res.send(getStore);
    } catch (err) {
        console.log(err);
    }
}

exports.createStore = async (req, res, next) => {
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
}

exports.getOrders = async (req, res) => {
    try {
        const getStore = await customOrder.find({})
        res.send(getStore);
    } catch (err) {
        console.log(err);
    }
}

exports.createOrders = async (req, res) => {
    const cart = new customOrder({
        paymentId: req.body.paymentId,
        userName: req.body.shipment.name,
        userImage: req.body.image,
        userAddress: req.body.shipment.address,
        userEmail: req.body.shipment.email,
        totalPrice: req.body.price,
        products: req.body.cartItems,

    });

    await cart.save((error, cart) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (cart) {
            return res.status(201).json({ cart });
        }
    })

}

exports.getId = async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await store.findById({ _id: id });
        res.send(getId);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.updateStore = async (req, res) => {
    try {
        const _id = req.params.id;
        const getUpdate = await store.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(getUpdate);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.deleteStore = async (req, res) => {
    try {
        const getUpdate = await store.findByIdAndDelete(req.params.id)
        res.send(getUpdate);
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.postsCustomerFeedback = async (req, res) => {
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

}

exports.getCustomerFeedback = async (req, res) => {
    try {
        const getFeedback = await feedback.find({})
        res.send(getFeedback);
    } catch (err) {
        console.log(err);
    }
}


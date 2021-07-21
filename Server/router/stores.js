const express = require("express");
const { getPosts, createStore, getOrders, createOrders, getId, updateStore, deleteStore, postsCustomerFeedback, getCustomerFeedback } = require("../controller/ProductController");
const router = express.Router();


// we will handle get store route
router.get("/store", getPosts);

// we will handle Post store route
router.post("/CreateStore", createStore);

// User Orders find route
router.get("/orders", getOrders);

//user orders create route
router.post("/orders", createOrders);

// we will handle  store findById 
router.get("/store/:id", getId);

// we will handle  store patch data
router.patch("/update/:id", updateStore);

// we will handle  store delete data
router.delete("/delete/:id", deleteStore);

//customer feedback post route
router.post("/feedback", postsCustomerFeedback);

//customer feedback get route
router.get("/feedback", getCustomerFeedback);

module.exports = router;
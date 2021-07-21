const express = require('express');
const { userRegister, userSignIn, checkingAdmin, createAdmin } = require('../controller/userController');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send('user  router ok')
})

// user registration route
router.post('/register', userRegister);

// user signIn route
router.post('/signIn', userSignIn);

// Admin checking route
router.post('/getAdmin', checkingAdmin);

//admin Create route
router.post("/postAdmin", createAdmin);

module.exports = router;
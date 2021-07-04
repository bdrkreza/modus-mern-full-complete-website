const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');


require('../connect');
const User = require('../model/userSchema')


router.get("/", (req, res, next) => {
    res.send('world from the router js')
})


router.post('/register', async (req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;

    if (!name || !email || !phone || !password || !confirmPassword) {
        return res.status(422).json({ error: 'pls filled the field properly' });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'email already Exist' });

        } else if (password != confirmPassword) {
            return res.status(422).json({ error: 'password are not matching' });

        } else {
            const user = new User({ name, email, phone, password, confirmPassword });
            await user.save();
            res.status(201).json({ msg: 'user registered successfully' });
        }


    } catch (err) {
        console.log(err);
    }
});


// Login route

router.post('/signIn', async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Pls filled the data' });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) {
                res.status(400).json({ error: 'invalid Credential password' });
            } else {
                res.json({ message: 'user SignIn Successfully' });
            }

        } else {
            res.status(400).json({ error: 'invalid Credential email' });
        }


    } catch (err) {
        console.log(err);
    }

})



module.exports = router;
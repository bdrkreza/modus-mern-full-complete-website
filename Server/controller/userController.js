const User = require("../model/userSchema");
const bcrypt = require('bcryptjs');
const admin = require("../model/Admin");

exports.userRegister = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(422).json({ error: 'pls filled the field properly' });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'email already Exist' });

        } else if (password != confirmPassword) {
            return res.status(422).json({ error: 'password are not matching' });

        } else {
            const user = new User({ name, email, password, confirmPassword });
            await user.save();
            res.status(201).json({ msg: 'user registered successfully' });
        }


    } catch (err) {
        console.log(err);
    }
};

exports.userSignIn = async (req, res) => {

    let token;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Pls filled the data' });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            res.cookie('token', token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            });

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

};

exports.checkingAdmin = async (req, res) => {
    const email = req.body.email;
    console.log(email);
    try {
        const userLogin = await Admin.findOne({ email: email });

        if (userLogin) {

            if (!userLogin) {
                res.status(400).json({ error: 'invalid Credential email' });
            } else {
                res.json({ message: 'user SignIn Successfully' });
            }
        }
    } catch (error) {
        console.log(error);
    }
};

exports.createAdmin = async (req, res) => {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
        return res.status(422).json({ error: 'pls filled the field properly' });
    }
    try {
        const adminExist = await admin.findOne({ email: email });

        if (adminExist) {
            return res.status(422).json({ error: 'email already Exist' });

        } else {
            const admin = new Admin({ name, email, role });
            await admin.save();
            res.status(201).json({ msg: 'admin registered successfully' });
        }

    } catch (error) {
        console.log(error);
    }
};
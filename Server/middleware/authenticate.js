const jwt = require('jsonwebtoken');
const User = require('../model/userSchema')

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtToken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, 'tokens.token': token });

        if (!rootUser) {
            throw new Error("user not Found")
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();

    } catch (error) {
        res.status(401).send('Unauthorized:no token provided');
        console.error(error);
    }
}

module.exports = Authenticate;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const middleware = [
    express.json({ limit: '30mb', extended: true }),
    express.urlencoded({ limit: '30mb', extended: true }),
    cors(),
];

app.use(middleware);

require('./connect');

//Load routes
const storeProduct = require('./router/stores')
const userRoute = require('./router/auth')

//all use routes
app.use('/', storeProduct);
app.use('/', userRoute);


//Error handler
const handleError = require('./utils/errorsHandler');

//Error Handler route
app.use((req, res, next) => {
    const error = new Error("Resources not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    handleError(error, res);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`api is ready on http://localhost:${PORT}`);
})
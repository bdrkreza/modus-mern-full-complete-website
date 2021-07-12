const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        paymentId: {
            type: String,
            default: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        userImage: {
            type: String,
        },
        userName: {
            type: String,
            require: true
        },
        userAddress: {
            type: String,
            require: true
        },
        userEmail: {
            type: String,
            require: true
        },
        totalPrice: {
            type: Number,
            require: true
        },

        products: [
            {
                productId: Number,
                qty: Number,
                name: String,
                price: Number,
                image: String
            }
        ],
        active: {
            type: Boolean,
            default: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("orders", CartSchema);



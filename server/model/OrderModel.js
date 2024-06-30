const mongoose = require('mongoose');
const {BSON} = require("mongodb");

const orderModel = mongoose.Schema({
    "orderId": {
        require: true,
        type: String,
        unique: true,
        index: true
    },
    "orderDate": {
        require: true,
        type: Date,
    },
    "totalItems": {
        require: true,
        type: Number,
        min: 0
    },
    "total": {
        require: true,
        type: Number,
        min: 0
    },
    "customerId": {
        require: true,
        type: String,
    },
    "orderDetails": {
        require: true,
        type: [{
            bookId: {
                type: String,
                required: true
            },
            bookName: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true,
                min: 0
            },
            qty: {
                type: Number,
                required: true,
                min: 0
            }
        }]
    }
}, {
    version: false
});

const order = mongoose.model("Order", orderModel);
module.exports = order;
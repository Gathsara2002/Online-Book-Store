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
    },
    "total": {
        require: true,
        type: Number,
    },
    "customerId": {
        require: true,
        type: String,
    },
}, {
    version: false
});

const order = mongoose.model("Order", orderModel);
module.exports = order;
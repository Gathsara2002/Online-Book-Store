//This is the model of user (user schema)

const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
        "userId": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "name": {
            require: true,
            type: String
        },
        "address": {
            require: true,
            type: String
        },
        "contact": {
            require: true,
            type: Number
        },
        "email": {
            require: true,
            type: String
        },
        "username": {
            require: true,
            type: String
        },
        "password": {
            require: true,
            type: String
        },
    },
    {
        version: false
    }
);

let user = mongoose.model('User',UserModel);

module.exports=user;

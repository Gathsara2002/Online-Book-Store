//This is the model of books (book schema)

const mongoose = require('mongoose');

const BookModel = mongoose.Schema({
        "bookId": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "bookName": {
            require: true,
            type: String
        },
        "author": {
            require: true,
            type: String
        },
        "price": {
            require: true,
            type: Number
        },
        "genre": {
            require: true,
            type: String
        },
        "qty": {
            require: true,
            type: Number
        },
        "view": {
            require: true,
            type: String
        },
    }, {
        version: false
    }
);

const book = mongoose.model("Book", BookModel);
module.exports = book;
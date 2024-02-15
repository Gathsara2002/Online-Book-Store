var express = require('express');
var router = express.Router();
let book = require('../controller/BookController');

//get books
router.get('/', book.getAllBooks);

// save books
router.post('/save', book.saveBook);

//update books
router.put('/update/:id', book.updateBook);

//delete books
router.delete('/delete/:id', book.deleteBook);

module.exports = router;
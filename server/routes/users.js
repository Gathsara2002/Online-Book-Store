var express = require('express');
var router = express.Router();
let user = require('../controller/UserController');

/* GET users listing. */
router.get('/', user.getUsers);

// save user
router.post('/save', user.saveUser);

//update user
router.put('/update');

//delete user
router.delete('/delete');

//search user
router.get('/find')

module.exports = router;

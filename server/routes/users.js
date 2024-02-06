var express = require('express');
var router = express.Router();
let user = require('../controller/UserController');

/* GET users listing. */
router.get('/', user.getUsers);

// save user
router.post('/save', user.saveUser);

module.exports = router;

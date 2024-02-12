var express = require('express');
var router = express.Router();
let user = require('../controller/UserController');

/* GET users listing. */
router.get('/', user.getUsers);

// save user
router.post('/save', user.saveUser);

//update user
router.put('/update', user.updateUser);

//delete user
router.delete('/delete', user.deleteUser);

//search user
router.get('/find', user.searchUser)

module.exports = router;

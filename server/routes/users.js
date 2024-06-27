var express = require('express');
var router = express.Router();
let user = require('../controller/UserController');

/* GET users listing. */
router.get('/', user.getUsers);

// signup user
router.post('/signup', user.signUpUser);

//login user
router.post('/login', user.loginUser);

//update user
router.put('/update/:id', user.updateUser);

//delete user
router.delete('/delete/:id', user.deleteUser);

//search user
router.get('/find/:id', user.searchUser)

module.exports = router;

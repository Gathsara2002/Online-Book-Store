var express = require('express');
var router = express.Router();
let order = require('../controller/OrderController');

//get all orders
router.get('/', order.getAllOrders);

// save order
router.post('/save', order.saveOrder);

//update order
router.put('/update/:id', order.updateOrder);

//delete order
router.delete('/delete/:id', order.deleteOrder);

module.exports = router;
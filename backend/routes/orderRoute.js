const express = require('express');
const { addOrderController, getOrderController, completeOrder } = require('../Controller/orderController');


const router = express.Router();

router.post("/add-order", addOrderController)
router.get('/get-order', getOrderController)
router.patch('/complete-order/:orderId', completeOrder)

module.exports = router
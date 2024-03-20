const express = require('express');
const { addOrderController, getOrderController } = require('../Controller/orderController');


const router = express.Router();

router.post("/add-order", addOrderController)
router.get('/get-order', getOrderController)



module.exports = router
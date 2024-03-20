const express = require('express');
const {getRazorpayApiKey, creatOrder } = require('../Controller/paymentController');
const authMiddleware = require('../Middelware/authMiddleware');


const router = express.Router();

router.get('/getRazorpayId',getRazorpayApiKey);
router.post('/creatorder',creatOrder);


module.exports = router
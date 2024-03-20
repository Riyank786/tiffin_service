const express = require('express');
const { registerController, loginController, currentUserController } = require('../Controller/authController');
const authMiddleware = require('../Middelware/authMiddleware');

const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginController)
router.get('/current-user', authMiddleware, currentUserController)


module.exports = router
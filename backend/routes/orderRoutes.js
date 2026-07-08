const express = require("express");
const router = express.Router();
const { placeOrder } = require("../controllers/orderController");
const authenticateToken = require('../middleware/authMiddleware');

router.post("/",authenticateToken, placeOrder);

module.exports = router;

const express = require("express");
const router = express.Router();
const { saveCart, getCart, clearCart } = require("../controllers/cartController");
const authenticateToken = require('../middleware/authMiddleware');

router.post("/",authenticateToken, saveCart);               // POST /cart
router.get("/:userId",authenticateToken, getCart);          // GET /cart/:userId
router.delete("/:userId",authenticateToken, clearCart);     // DELETE /cart/:userId

module.exports = router;

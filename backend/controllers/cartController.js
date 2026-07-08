// backend/controllers/cartController.js
const Cart = require("../models/Cart");

// POST: Save cart
const saveCart = async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    const cart = new Cart({ userId, items, total });
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET: Get cart by userId
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Clear cart by userId
const clearCart = async (req, res) => {
  try {
    const result = await Cart.deleteOne({ userId: req.params.userId });
    res.json({ message: "Cart cleared", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  saveCart,
  getCart,
  clearCart, // ✅ Make sure this is exported
};

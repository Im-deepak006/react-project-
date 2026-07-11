const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { items, total, deliveryDetails } = req.body;

    const order = new Order({
      userId: req.user.id, // Set authenticated user ID
      items,
      total,
      deliveryDetails,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
};

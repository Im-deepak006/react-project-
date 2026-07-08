const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  image: String
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"  // Assuming you'll add user login later
  },
  items: [cartItemSchema],
  total: Number,
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;

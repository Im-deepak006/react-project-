const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false, // set to true if user auth is implemented
    ref: "User",
  },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  total: Number,
  deliveryDetails: {
    fullName: String,
    address: String,
    city: String,
    pinCode: String,
    mobile: String,
  },
  status: {
    type: String,
    default: "Pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);

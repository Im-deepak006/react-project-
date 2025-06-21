const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weight: { type: String },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  discount: { type: Number },
  image: { type: String } // We'll store just the image file name (e.g., "iteam1.jpg")
});

module.exports = mongoose.model('Product', productSchema);

const Product = require('../models/product');

// GET /products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all from DB
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getProducts };

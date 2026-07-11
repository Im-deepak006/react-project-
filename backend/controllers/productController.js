const Product = require('../models/Product');

// GET /products
const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter); // Fetch filtered from DB
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getProducts };

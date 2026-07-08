const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const sampleProducts = [
  { name: 'Karamani', price: 18, image: '/assets/image/iteam1.jpg', weight: '100g', discount: 10 },
  { name: 'Green Pattani', price: 25, image: '/assets/image/iteam2.jpg', weight: '100g' },
  { name: 'Kerala Papadam', price: 39, image: '/assets/image/iteam3.png', weight: '250g', discount: 3, oldPrice: 40 },
  { name: 'Adukkumalli Idly Rice', price: 55, oldPrice: 60, weight: '1kg', image: '/assets/image/iteam4.jpg' },
  { name: 'Moong Dhall', price: 75, oldPrice: 80, weight: '500g', image: '/assets/image/iteam5.jpg' },

  { name: 'Karamani', price: 18, image: '/assets/image/iteam1.jpg', weight: '100g', discount: 10 },
  { name: 'Green Pattani', price: 25, image: '/assets/image/iteam2.jpg', weight: '100g' },
  { name: 'Kerala Papadam', price: 39, image: '/assets/image/iteam3.png', weight: '250g', discount: 3, oldPrice: 40 },
  { name: 'Adukkumalli Idly Rice', price: 55, oldPrice: 60, weight: '1kg', image: '/assets/image/iteam4.jpg' },
  { name: 'Moong Dhall', price: 75, oldPrice: 80, weight: '500g', image: '/assets/image/iteam5.jpg' },
];

const importData = async () => {
  try {
    await Product.deleteMany(); // clear old data
    await Product.insertMany(sampleProducts);
    console.log('Product Data Imported!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();

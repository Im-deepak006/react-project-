const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const sampleProducts = [
  // Grocery Essentials
  { name: 'Karamani', price: 18, image: '/assets/image/iteam1.jpg', weight: '100g', discount: 10, category: 'grocery-essentials' },
  { name: 'Green Pattani', price: 25, image: '/assets/image/iteam2.jpg', weight: '100g', category: 'grocery-essentials' },
  { name: 'Adukkumalli Idly Rice', price: 55, oldPrice: 60, weight: '1kg', image: '/assets/image/iteam4.jpg', category: 'grocery-essentials' },
  { name: 'Moong Dhall', price: 75, oldPrice: 80, weight: '500g', image: '/assets/image/iteam5.jpg', category: 'grocery-essentials' },

  // Dairy & Fresh Foods
  { name: 'Kerala Papadam', price: 39, image: '/assets/image/iteam3.png', weight: '250g', discount: 3, oldPrice: 40, category: 'dairy-fresh' },
  { name: 'Fresh Milk', price: 28, image: '/assets/image/iteam11.jpg', weight: '500ml', category: 'dairy-fresh' },

  // Oils & Condiments
  { name: 'Gingelly Oil', price: 240, image: '/assets/image/iteam8.jpg', weight: '1L', category: 'oils-condiments' },
  { name: 'Coconut Oil', price: 190, image: '/assets/image/iteam8.jpg', weight: '1L', category: 'oils-condiments' },

  // Sweets & Savouries
  { name: 'Fried Peanut', price: 25, image: '/assets/image/iteam11.jpg', weight: '100g', category: 'Sweets-Savouries' },

  // Beverages & Frozen Foods
  { name: 'Cold Drink', price: 40, image: '/assets/image/iteam11.jpg', weight: '750ml', category: 'Beverages-Frozen' },

  // Health & Personal Care
  { name: 'Lifebuoy Handwash', price: 75, oldPrice: 80, weight: '500g', image: '/assets/image/iteam11.jpg', category: 'Health-Personal' }
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

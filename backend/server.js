const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes); // 🔐 Register and Login API: POST /auth/register, POST /auth/login

// Routes
app.use('/products', require('./routes/productRoutes'));
const cartRoutes = require("./routes/cartRoutes");
app.use("/cart", cartRoutes);
app.use("/order", require("./routes/orderRoutes"));


app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Topbar from "./Navbar.jsx";
import HomePage from "./HomePage.jsx";
import Cart from "./Cart.jsx";
import Footer from "./Footer.jsx";
import About from "./AboutUs.jsx";
import FAQ from "./FAQ.jsx";
import TermsConditions from "./TermsConditions.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import ReturnRefund from "./Return-Refund.jsx";
import ContactUs from "./ContactUs.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import GroceryEssentials from "./GroceryEssentials.jsx";
import Checkout from "./CheckoutPage.jsx";
import ScrollToTop from "./ScrollToTop"; 


const App = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.name === product.name);
      if (existingIndex !== -1) {
        // Update quantity by creating a new array
        return prevCart.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (index, type) => {
    setCart((prevCart) => {
      return prevCart.map((item, i) => {
        if (i !== index) return item;
        if (type === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === "decrement" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]); // ✅ Clear all cart items
  };

  const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!isAuthRoute && <Topbar />}

      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-refund" element={<ReturnRefund />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop/grocery-essentials" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/oils-condiments" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/sweets-savouries" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/beverages-frozen" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/health-personal" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/cleaning-household" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/pooja-essentials" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/stationery-fancy" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/shop/dairy-fresh" element={<GroceryEssentials addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />

      </Routes>

      {!isAuthRoute && (
        <>
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

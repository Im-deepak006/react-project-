import React, { useState } from "react";
import "./Cart.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // ✅ Save cart to MongoDB when user clicks Buy Now
  const saveCartToDB = async () => {
    try {
      const cleanedItems = cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: typeof item.image === "string" ? item.image : "" // avoid local img reference in DB
      }));

      const res = await axios.post("http://localhost:5000/cart", {
        userId: "665d4b2c8b0c1a2f8fa12345", // dummy userId for now
        items: cleanedItems,
        total: total,
      });

      console.log("✅ Cart saved:", res.data);
    } catch (err) {
      console.error("❌ Error saving cart:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <div className="cart-container" onClick={() => setIsOpen(!isOpen)} style={{ zIndex: 1000 }}>
        <div className="cart-count">
          <div className="cart-icon">🛒</div>
          <div className="cart-items">{itemCount} Items</div>
        </div>
        <div className="cart-total">₹{total}</div>
      </div>

      <div className={`cart ${isOpen ? "open" : ""}`} style={{ zIndex: 1001 }}>
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-content">
          {cart.map((item, index) => (
            <div className="cart-box" key={index}>
              <img src={item.image} width="50" alt={item.name} />
              <div>
                <h5>{item.name}</h5>
                <div className="quantity-manager">
                  <button onClick={() => updateQuantity(index, "decrement")}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, "increment")}>+</button>
                </div>
                <button id="delete-btn" onClick={() => removeFromCart(index)}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    alt="delete"
                    width="20"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-price">₹{total}</div>
        </div>

        <button
          className="btn-buy"
          onClick={() => {
            saveCartToDB();        // ✅ Save to MongoDB
            setIsOpen(false);      // ✅ Close cart panel
            navigate("/checkout"); // ✅ Redirect to checkout
          }}
        >
          Buy Now
        </button>

        <i className="ri-close-circle-fill" id="cart-close" onClick={() => setIsOpen(false)}></i>
      </div>
    </>
  );
};

export default Cart;

import React, { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

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
    setIsOpen(false);        // ✅ Close the cart drawer
    navigate("/checkout");   // ✅ Navigate to Checkout page
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

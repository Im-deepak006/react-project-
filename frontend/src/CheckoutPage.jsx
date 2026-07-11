import React, { useState } from "react";
import "./Checkout.css";
import axios from "axios";

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    pinCode: "",
    mobile: "",
  });

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("❌ Please log in to place an order.");
      return;
    }

    if (cart.length === 0) {
      alert("❌ Your cart is empty.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/order",
        {
          items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: typeof item.image === "string" ? item.image : ""
          })),
          total: totalAmount,
          deliveryDetails: formData, // Maps to 'address' in backend
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Order Placed Successfully!");
      setFormData({
        fullName: "",
        address: "",
        city: "",
        pinCode: "",
        mobile: "",
      });
    } catch (err) {
      console.error("❌ Failed to place order", err);
      alert(err.response?.data?.message || "❌ Something went wrong placing the order!");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Delivery Details</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address (House No, Street, Area)"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="summary-section">
          <h3>Order Summary</h3>
          {cart.map((item, index) => (
            <div className="summary-item" key={index}>
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="total">
            <strong>Total:</strong> ₹{totalAmount}
          </div>

          <button type="submit" className="checkout-btn">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

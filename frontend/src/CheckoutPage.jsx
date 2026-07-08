import React, { useState } from "react";
import "./Checkout.css";
import axios from "axios";

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
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

  try {
    const res = await axios.post(
      "http://localhost:5000/order",
      {
        items: cart,
        total: totalAmount,
        deliveryDetails: formData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Attach JWT token here
        },
      }
    );

    alert("✅ Order Placed Successfully!");
    setFormData({
      fullName: "",
      addressLine1: "",
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
            name="addressLine1"
            placeholder="Address Line 1"
            value={formData.addressLine1}
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

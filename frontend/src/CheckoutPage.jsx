import React from "react";
import "./Checkout.css"; // Create this CSS file for styling

const Checkout = ({ cart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    // You can add order placement or navigation logic here
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Delivery Details</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address Line 1" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Pin Code" required />
          <input type="tel" placeholder="Mobile Number" required />
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

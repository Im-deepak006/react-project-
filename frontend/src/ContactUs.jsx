import React, { useState } from 'react';
import './ContactUs.css';
import contactImg from './assets/image/contact.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // 👉 Whenever user types, update that field in formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 👉 When form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // ❌ Prevent page reload

    let newErrors = {};
    let isValid = true;

    // ✅ Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
        isValid = false;
      }
    });

    setErrors(newErrors);

    // ✅ If valid, save to localStorage and clear form
    if (isValid) {
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      alert('Form submitted and saved in localStorage!');

      // 🎉 Reset the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div>
      <div className="full-banner"></div>
      <div className="title text-center">
        <h2><strong>Contact Us</strong></h2>
        <p>Home &gt; Contact Us</p>
      </div>

      <div className="container- mt-5">
        <div className="contact-container row">
          <div className="col-md-5 text-center p-4">
            <img src={contactImg} alt="Contact" className="img-fluid mb-3" />
            <h5><strong>Address</strong></h5>
            <p>India | Qatar | UAE</p>
            <h5><strong>Phone</strong></h5>
            <p>+91 818181 7556<br />+91 818181 7558</p>
            <h5><strong>Email Address</strong></h5>
            <p>support@sambhaar.com</p>
          </div>
          <div className="col-md-7">
            <h4 className="mb-3"><strong>How can we improve your experience?</strong></h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
                  {errors.name && <div className="error-text">{errors.name}</div>}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <div className="error-text">{errors.email}</div>}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" value={formData.subject} onChange={handleChange} />
                {errors.subject && <div className="error-text">{errors.subject}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" id="message" value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <div className="error-text">{errors.message}</div>}
              </div>
              <div className="form-check mb-3">
              <button type="submit" className="btn button">SEND MESSAGE</button>
           </div> </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

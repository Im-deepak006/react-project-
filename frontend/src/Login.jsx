import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";
import sambhaarLogo from "/assets/image/sambhaar.png";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("loggedInEmail", form.email); // Save email in localStorage
      alert("Login Successful!");
      setForm({ email: "", password: "" }); // Clear form
    }
  };

  return (
    <div className="container-fluid-login">
      <Link to="/">
        <img src={sambhaarLogo} alt="Sambhaar" className="logo-img" />
      </Link>

      {/* Left Section */}
      <div className="left-section-login">
        <h1>Sambhaar.com</h1>
        <p>Your Trusted Source for Everyday Groceries</p>
        <div className="langu">
          <span className="t1">வணக்கம்</span>
          <span className="t2">स्वागत है</span>
          <span className="t3">Welcome</span>
          <span className="t4">స్వాగతం</span>
          <span className="t5">സ്വാഗതം</span>
          <span className="t6">স্বাগত</span>
          <span className="t7">स्वागतम्</span>
          <span className="t8">ಸ್ವಾಗತ</span>
          <span className="t9">வணக்கம்</span>
          <span className="t10">स्वागत है</span>
          <span className="t11">Welcome</span>
          <span className="t12">స్వాగతం</span>
          <span className="t13">സ്വാഗതം</span>
          <span className="t14">স্বাগত</span>
          <span className="t15">स्वागतम्</span>
          <span className="t16">ಸ್ವಾಗತ</span>
          <span className="t17">ಸ್ವಾಗತ</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section-login">
        <div className="login-box">
          <h3><strong>Welcome Back!</strong></h3>
          <p>Enter your credentials to login</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group position-relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} position-absolute`}
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#EA580C"
                }}
              ></i>
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <button type="submit" className="btn">Login</button>
            <p className="mt-2">
              Don’t have an account?{" "}
              <Link to="/register" className="text-decoration-none" style={{ color: "#EA580C" }}>
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

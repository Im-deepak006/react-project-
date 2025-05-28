import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import sambhaarLogo from "./assets/image/sambhaar.png";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

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
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (!form.cpassword.trim()) {
      newErrors.cpassword = "Confirm password is required";
      isValid = false;
    } else if (form.password !== form.cpassword) {
      newErrors.cpassword = "Passwords do not match";
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
      // Save the registration data into localStorage
      localStorage.setItem("registeredUser", JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }));

      alert("Registration Successful!");
      setForm({ username: "", email: "", password: "", cpassword: "" });
    }
  };

  return (
    <div className="container-fluid d-flex vh-100 p-0"> 
      <Link to="/">
        <img src={sambhaarLogo} alt="Sambhaar" className="logo-img" />
      </Link>
      
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


      <div className="right-section d-flex justify-content-center align-items-center bg-white">
        <div className="container">
          <h3><strong>Register now!</strong></h3>
          <p>Enter your information to register</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
              {errors.username && <div className="error">{errors.username}</div>}
            </div>

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

            <div className="form-group position-relative">
              <input
                type={showCPassword ? "text" : "password"}
                id="cpassword"
                className={`form-control ${errors.cpassword ? "is-invalid" : ""}`}
                placeholder="Confirm Password"
                value={form.cpassword}
                onChange={handleChange}
              />
              <i
                className={`bi ${showCPassword ? "bi-eye-slash" : "bi-eye"} position-absolute`}
                onClick={() => setShowCPassword(!showCPassword)}
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#EA580C"
                }}
              ></i>
              {errors.cpassword && <div className="error">{errors.cpassword}</div>}
            </div>

            <button type="submit" className="btn" i>
              Submit
            </button>
            <p className="login-link mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none" style={{ color: "#EA580C" }}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

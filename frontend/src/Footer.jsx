import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  LocationOn,
  Email,
  Phone,
  WhatsApp,
  Instagram,
  Facebook,
  YouTube
} from '@mui/icons-material';
import googlePlay from './assets/image/playstore.png';
import appStore from './assets/image/app-store.png';

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer-divider" />
      <div className="footer-container">
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><LocationOn className="icon" /> India | Qatar | UAE</p>
          <p><Email className="icon" /> support@sambhaar.com</p>
          <p><Phone className="icon" /> +91 818181 9368</p>
          <p><Phone className="icon" /> +91 818181 2912</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/return-refund">Return & Refund Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Shop Now</h4>
          <ul>
            <li><Link to="/shop/grocery-essentials">Grocery Essentials</Link></li>
            <li><Link to="/shop/dairy-fresh">Dairy & Fresh Foods</Link></li>
            <li><Link to="/shop/oils-condiments">Oils & Condiments</Link></li>
            <li><Link to="/shop/sweets-savouries">Sweets & Savouries</Link></li>
            <li><Link to="/shop/beverages-frozen">Beverages & Frozen Foods</Link></li>
            <li><Link to="/shop/health-personal">Health & Personal Care</Link></li>
            <li><Link to="/shop/cleaning-household">Cleaning & Household</Link></li>
            <li><Link to="/shop/pooja-essentials">Pooja Essentials</Link></li>
            <li><Link to="/shop/stationery-fancy">Stationery & Fancy Items</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>My Account</h4>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/reset-password">Reset Password</Link></li>
          </ul>

          <h4>Download Our App</h4>
          <img src={googlePlay} alt="Google Play" className="store-img" />
          <img src={appStore} alt="App Store" className="store-img" />
          <p>Coming Soon...!</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="icon whatsapp"><WhatsApp /></a>
            <a href="#" className="icon instagram"><Instagram /></a>
            <a href="#" className="icon facebook"><Facebook /></a>
            <a href="#" className="icon youtube"><YouTube /></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">
        &copy; 2025 Sambhaar.com. All Rights Reserved. | Powered by <a href="https://maverico.com" target="_blank" rel="noreferrer">Maverico.com</a>
      </p>
    </div>
  );
};

export default Footer;

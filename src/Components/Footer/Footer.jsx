import React from 'react';
import "./Footer.css";
import logo from '../../../public/img/logo1.png';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={logo} alt="Beauty Product Logo" />
          <p>Discover your natural beauty with our premium skincare and cosmetic products, carefully crafted for your unique glow.</p>
          <div className="footer-social-icon">
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><FaPhone className="contact-icon" /> +91 7041491256</li>
            <li><FaEnvelope className="contact-icon" /> BeautyProduct@gmail.com</li>
            <li><FaMapMarkerAlt className="contact-icon" /> Gujarat, India</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; BeautyProduct.com - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
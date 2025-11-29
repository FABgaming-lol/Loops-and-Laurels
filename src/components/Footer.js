import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-image">
  <img src="/logo.png" alt="Loops and Laurels" />
</div>
              </div>
              <div className="logo-text">
                <span>Loops and Laurels</span>
                <small>Artistry in every stitch!</small>
              </div>
            </div>
            <p className="footer-description">
              Creating beautiful, handmade crochet items with love and dedication. 
              Each piece tells a story of craftsmanship and passion.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#care">Product Care</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> hello@loopsandlaurels.com</p>
              <p><i className="fas fa-phone"></i> +91 98765 43210</p>
              <p><i className="fas fa-map-marker-alt"></i> Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <span>We Accept:</span>
            <div className="payment-icons">
              <i className="fab fa-google-pay"></i>
              <i className="fab fa-phone-pe"></i>
              <i className="fas fa-mobile-alt"></i>
              <i className="fas fa-qrcode"></i>
            </div>
          </div>
          <div className="copyright">
            &copy; 2024 Loops and Laurels. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

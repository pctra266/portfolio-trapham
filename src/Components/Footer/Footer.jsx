import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            Pham Cong <br /> Tra<span>.</span>
          </h2>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4>Let's Connect</h4>
            <ul>
              <li><a href="#">Email</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025</p>
        <p>Pham Cong Tra.</p>
      </div>
    </footer>
  );
};

export default Footer;

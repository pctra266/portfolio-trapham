import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>
            Pham Cong <br /> Tra<span>.</span>
          </h2>
        </div>

        <div className="footer-links">
          
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#" data-scroll-to>Home</a></li>
              <li><a href="#about" data-scroll-to>About</a></li>
              <li><a href="#project" data-scroll-to>Projects</a></li>
              <li><a href="#contact" data-scroll-to>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Let's Connect</h4>
            <ul>
              <li>
                <a href="mailto:trapham.dev@gmail.com">Email</a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/trapham266" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/pctra266" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Pham Cong Tra. All rights reserved.</p>
        <p className="footer-note">Built with React & Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
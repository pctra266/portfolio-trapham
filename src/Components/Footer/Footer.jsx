import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-col">
        <ul>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
      <div className="footer-col">
        <p>© 2025 YourCompanyName. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

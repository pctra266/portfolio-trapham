import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo-container">
        <img src={logo} className="logo"></img>
        <div>TraPham</div>
      </div>
      <ul>
        <li>Home</li>
        <li>Website</li>
        <li>About me</li>
        <li>Serious Project</li>
        <li>Brainrot Project</li>
        <li>
          <button className="btn">Contact me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

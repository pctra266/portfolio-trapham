import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ` + (sticky ? "dark-nav" : "")}>
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

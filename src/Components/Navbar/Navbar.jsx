import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import logo...

const Navbar = ({ onNavClick, scroll }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (!scroll) return;
    scroll.on("scroll", (obj) => {
      setSticky(obj.scroll.y > 50);
    });
  }, [scroll]);

  const handleSwitchTab = (tabName) => {
    onNavClick(tabName);
    if (scroll) {
      scroll.scrollTo("top");
    }
  };


  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <ul>
        <li onClick={() => handleSwitchTab("space")}>Home</li>
        <li onClick={() => handleSwitchTab("about")}>About</li>
        
        <li onClick={() => scroll.scrollTo("#project")}>Project</li>
        <li onClick={() => scroll.scrollTo("#contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = ({ onNavClick, scroll }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (obj) => {
      const scrollY = obj.scroll.y;
      setSticky(scrollY > 50);
    });

    return () => {
      scroll.off("scroll");
    };
  }, [scroll]);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <ul>
        <li onClick={() => onNavClick("space")}>Home</li>
        <li onClick={() => onNavClick("about")}>About</li>
        <li onClick={() => scroll.scrollTo("project")}>Project</li>
        <li onClick={() => scroll.scrollTo("footer")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Space.css";
import dont_care from "../../assets/yamada.png";

const Space = () => {
  return (
    <div className="space container">
      <div className="space-text">
        <h1>Pham Cong Tra</h1>
        <h2>Backend developer</h2>
        <button className="btn">Download CV</button>
        <button className="btn">Contact Info</button>
      </div>
    </div>
  );
};

export default Space;

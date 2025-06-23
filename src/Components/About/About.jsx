import React from "react";
import "./About.css";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h2>Hi, I'm Pham Cong Tra</h2>
        <p>
          I enjoy learning new technology and solving real-world problems by
          developing software. It makes me feel I'm a beneficial person who
          contributes to society.
        </p>
      </div>
    </div>
  );
};

export default About;

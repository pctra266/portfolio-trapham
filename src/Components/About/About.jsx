import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About Me</h3>
        <h2>Pham Cong Tra</h2>
        <p>
          Hello! I'm Trà Phạm — a web developer with over a year of experience
          working with Java, C#/.NET, and SQL. I'm also comfortable navigating
          the front-end world using HTML, CSS, JavaScript, TypeScript, and
          React.
        </p>
        <p>
          I enjoy learning new technology and solving real-world problems by
          developing software. It makes me feel I'm a beneficial person who
          contributes to society..
        </p>
      </div>
    </div>
  );
};

export default About;

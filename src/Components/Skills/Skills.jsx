import React from "react";
import "./Skills.css";
import project1 from "../../assets/alice.jpg";
import project2 from "../../assets/alice2.jpg";
import project3 from "../../assets/alice3.jpg";
import project4 from "../../assets/alice4.jpg";

const SeriousProject = () => {
  return (
    <div className="serious-project">
      <div className="gallery">
        <img src={project1} alt="" />
        <img src={project2} alt="" />
        <img src={project3} alt="" />
        <img src={project4} alt="" />
      </div>
      <button className="btn">See more here</button>
    </div>
  );
};

export default SeriousProject;

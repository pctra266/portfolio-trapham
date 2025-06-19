import React from "react";
import "./Education.css";
import web_1 from "../../assets/leaf1.jpg";
import web_2 from "../../assets/leaf2.jpg";
import front_end from "../../assets/front-end.png";
import back_end from "../../assets/computer.png";

const Website = () => {
  return (
    <div className="websites ">
      <div className="website">
        <img src={web_1} />
        <div className="caption">
          <img src={front_end} alt="" />
          <p>Frontend</p>
        </div>
      </div>

      <div className="website">
        <img src={web_2} />
        <div className="caption">
          <img src={back_end} alt="" />
          <p>Backend</p>
        </div>
      </div>
    </div>
  );
};

export default Website;

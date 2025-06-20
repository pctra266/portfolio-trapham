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
          <p>Top 30 School Rank 2022</p>
          <p>GPA: 8.65/10</p>
          <p>Four-time Honorable Student (FA23, SP24, SU24, FA24)</p>
        </div>
      </div>

      <div className="website">
        <img src={web_2} />
        <div className="caption">
          <p>
            {" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/specialization/IEX59IY3GYFQ"
            >
              CertNexus Certified Ethical Emerging Technologist Specialization
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/specialization/9AAFIG8IE9X1"
            >
              Software Development Lifecycle Specialization
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/specialization/Q6PJ5ANLPBHG"
            >
              Basics of Web Development & Coding Specialization
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/specialization/3FK8AJ2PFG7A"
            >
              Academic Skills for University Success Specialization
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Website;

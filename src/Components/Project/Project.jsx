import React, { useRef } from "react";
import "./Project.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import brainrot1 from "../../assets/emu.png";
const BrainrotProject = () => {
  let slider = useRef();
  let x = 0;
  const forward = () => {
    if (x > -50) {
      x -= 25;
      slider.current.style.transform = `translateX(${x}%)`;
    }
  };
  const backward = () => {
    if (x < 0) {
      x += 25;
      slider.current.style.transform = `translateX(${x}%)`;
    }
  };

  return (
    <div className="brainrot-project">
      <img src={next_icon} alt="" className="next-btn" onClick={forward} />

      <img src={back_icon} alt="" className="back-btn" onClick={backward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>Bright Town Study</h3>
                  <span>
                    <a
                      href="https://brighttownstudy.netlify.app"
                      target="_blank"
                    >
                      Try it now
                    </a>
                  </span>
                </div>
              </div>
              <p>React, Tailwindcss project about learning social media</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>BusSystem</h3>
                  <span>
                    <a
                      href="https://github.com/pctra266/BusSystem"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </span>
                </div>
              </div>
              <p>JSP/Servlet java web about manage bus schedule</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>DrivingSkillCert</h3>
                  <span>
                    <a
                      href="https://github.com/pctra266/DrivingSkillCert"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </span>
                </div>
              </div>
              <p>
                WPF C#/.net project about exam and manage driving skill
                certificate.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>ProductsMaintainManagement</h3>
                  <span>
                    <a
                      href="https://github.com/pctra266/ProductsMaintainManagement"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </span>
                </div>
              </div>
              <p>JSP/Servlet java web about manage warranty process.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrainrotProject;

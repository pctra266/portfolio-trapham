import React from "react";
import "./BrainrotProject.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import brainrot1 from "../../assets/emu.png";
const BrainrotProject = () => {
  return (
    <div className="brainrot-project">
      <img src={next_icon} alt="" className="next-btn" />

      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>Emu Etori</h3>
                  <span>
                    <a
                      href="OldSource/BrainrotProject/emuotori.html"
                      target="_blank"
                    >
                      Try it now
                    </a>
                  </span>
                </div>
              </div>
              <p>
                lots of otori emus, click to get more otori emus, click on new
                emus to get more otori emus
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>Emu Etori</h3>
                  <span>30 minutes</span>
                </div>
              </div>
              <p>
                lots of otori emus, click to get more otori emus, click on new
                emus to get more otori emus
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>Emu Etori</h3>
                  <span>30 minutes</span>
                </div>
              </div>
              <p>
                lots of otori emus, click to get more otori emus, click on new
                emus to get more otori emus
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>Emu Etori</h3>
                  <span>30 minutes</span>
                </div>
              </div>
              <p>
                lots of otori emus, click to get more otori emus, click on new
                emus to get more otori emus
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrainrotProject;

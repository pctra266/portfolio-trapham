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
                  <h3>Emu Etori 1</h3>
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
                  <h3>Emu Etori 2</h3>
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
                  <h3>Emu Etori 3</h3>
                  <span>30 minutes</span>
                </div>
              </div>
              <p>
                lots of otori emus, click to get more otori emus, click on new
                emus to get more otori .
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="brainrot-info">
                <img src={brainrot1} alt="" />
                <div>
                  <h3>Emu Etori 4</h3>
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

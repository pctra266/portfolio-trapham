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
        <h3>About Tra Pham</h3>
        <h2>Random paragraph</h2>
        <p>
          Generating random paragraphs can be an excellent way for writers to
          get their creative flow going at the beginning of the day. The writer
          has no idea what topic the random paragraph will be about when it
          appears. This forces the writer to use creativity to complete one of
          three common writing challenges.
        </p>
        <p>
          The writer can use the paragraph as the first one of a short story and
          build upon it. A second option is to use the random paragraph
          somewhere in a short story they create.{" "}
        </p>
        <p>
          The third option is to have the random paragraph be the ending
          paragraph in a short story. No matter which of these challenges is
          undertaken, the writer is forced to use creativity to incorporate the
          paragraph into their writing.
        </p>
      </div>
    </div>
  );
};

export default About;

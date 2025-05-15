import React from "react";
import "./Space.css";
import dont_care from "../../assets/yamada.png";

const Space = () => {
  return (
    <div className="space container">
      <div className="space-text">
        <h1>About the website </h1>
        <p>
          This is my dumb website, I create it to show-off my react skill with
          employer. Mấy con gà thì biết cái gì. Do what ever you want, who care?
          Minotaur là người Lai Châu. Việt Nam vô địch
        </p>
        <button className="btn">
          Fuck You <img src={dont_care}></img>
        </button>
      </div>
    </div>
  );
};

export default Space;

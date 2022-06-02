import React from "react";
import lowerShape from "../../../assets/img/lower-shape.svg";
import upperShape from "../../../assets/img/upper-shape.svg";

import "./Style.css";

const Intro = () => {
  return (
    <div className="intro__container">
      <img className="background__shape" src={upperShape} alt="uppershape" />
      <img
        className="background__shape lowershape-flipped"
        src={lowerShape}
        alt="lowershape"
      />
      <img
        className="background__shape below__shape"
        src={lowerShape}
        alt="lowershape"
      />
      <img
        className="background__shape uppershape-flipped below__shape"
        src={upperShape}
        alt="uppershape"
      />
      <h1 className="headline">Unleash The Power Of Imagination</h1>
    </div>
  );
};

export default Intro;

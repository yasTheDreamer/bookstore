import React from "react";
import Content from "../../molecules/content/Content";
import Intro from "../../molecules/intro/Intro";
import NavBar from "../../molecules/navBar/NavBar";

import "./Style.css";

const Home = () => {
  return (
    <div className="home__container">
      <NavBar />
      <Intro />
      <div className="invisible__div"></div>
      <Content />
    </div>
  );
};

export default Home;

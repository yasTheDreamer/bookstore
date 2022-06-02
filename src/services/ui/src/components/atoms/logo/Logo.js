import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.svg";

import "./Style.css";

const Logo = () => {
  return (
    <div className="logo__container">
      <Link className="logo__link" to="/">
        <img src={logo} alt="Novel Cosmos Logo" />
      </Link>
    </div>
  );
};

export default Logo;

import React from "react";
import { Link } from "react-router-dom";

import "./Style.css";

const HeaderItem = (props) => {
  return (
    <div className={`headerItem__container ${props.active}`}>
      <Link to={props.path}>
        <h1>{props.title}</h1>
      </Link>
    </div>
  );
};

export default HeaderItem;

import React from "react";

const Button = (props) => {
  return (
    <div className="button__container">
      <input type="button" value={props.value} onClick={props.onClick} />
    </div>
  );
};

export default Button;

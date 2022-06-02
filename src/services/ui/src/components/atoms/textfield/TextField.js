import React from "react";

const TextField = (props) => {
  return (
    <div className="textfield__container">
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;

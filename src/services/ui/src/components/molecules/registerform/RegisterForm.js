import React, { useState } from "react";
import TextField from "../../atoms/textfield/TextField";

const RegisterForm = (props) => {
  const [textFields, setTextFields] = useState([
    {
      type: "text",
      placeholder: "first name",
      id: "first__name",
    },
    {
      type: "text",
      placeholder: "last name",
      id: "last__name",
    },
    {
      type: "text",
      placeholder: "username",
      id: "user__name",
    },
    {
      type: "password",
      placeholder: "password",
      id: "password",
    },
  ]);

  return (
    <div className="registerform__container">
      {textFields.map((textfield, i) => {
        return (
          <TextField
            key={i}
            id={textfield.id}
            type={textfield.type}
            placeholder={textfield.placeholder}
          />
        );
      })}
    </div>
  );
};

export default RegisterForm;

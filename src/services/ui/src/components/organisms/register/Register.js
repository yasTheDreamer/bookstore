import React from "react";
import Button from "../../atoms/button/Button";
import RegisterForm from "../../molecules/registerform/RegisterForm";
import Services from "../../../services";

const Register = (props) => {
  const registerHandler = () => {
    const firstName = document.getElementById("first__name");
    const lastName = document.getElementById("last__name");
    const userName = document.getElementById("user__name");
    const password = document.getElementById("password");

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      user_name: userName.value,
      password: password.value,
    };

    console.log(data);

    Services.UserService.post(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register__container">
      <RegisterForm />
      <Button value="register" onClick={registerHandler} />
    </div>
  );
};

export default Register;

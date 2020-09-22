import React from "react";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import InputWithIcon from "../../components/Misc/InputWithIcon/InputWithIcon";

const Login = () => {
  return (
    <div className="cfb-login">
      <div className="cfb-login__box">
        <div className="cfb-login__heading">Login to continue</div>
        <InputWithIcon placeholder="Email Address" />
        <InputWithIcon placeholder="Password" iconClass="fas fa-lock" />
        <ButtonWithIcon buttonText="Continue" iconClass="fas fa-arrow-right" />
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import InputWithIcon from "../../components/Misc/InputWithIcon/InputWithIcon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="cfb-login">
      <div className="cfb-login__box">
        <div className="cfb-login__heading">Login to continue</div>
        <InputWithIcon
          placeholder="Email Address"
          value={email}
          onInputChange={setEmail}
        />
        <InputWithIcon
          placeholder="Password"
          iconClass="fas fa-lock"
          value={password}
          onInputChange={setPassword}
          inputType="password"
        />
        <ButtonWithIcon buttonText="Continue" iconClass="fas fa-arrow-right" />
      </div>
    </div>
  );
};

export default Login;

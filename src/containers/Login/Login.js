import React, { useState } from "react";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import GoogleButton from "../../components/Misc/GoogleButton/GoogleButton";
import InputWithIcon from "../../components/Misc/InputWithIcon/InputWithIcon";
import OrLine from "../../components/Misc/OrLine/OrLine";

const Login = ({ firebase }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("login props => ", props);

  return (
    <div className="cfb-login">
      <div className="cfb-login__box">
        <div className="cfb__main-heading">Coding for beginners</div>
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
        <ButtonWithIcon
          buttonText="Continue"
          iconClass="fas fa-arrow-right"
          onClick={() =>
            firebase.createUserWithEmailAndPassword(email, password)
          }
        />

        <OrLine />

        <GoogleButton
          text="Sign in with Google"
          callback={firebase.signUserWithGoogle}
        />
      </div>
    </div>
  );
};

export default Login;

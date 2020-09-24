import React, { useState } from "react";
import ButtonWithIcon from "../../components/Misc/ButtonWithIcon/ButtonWithIcon";
import GoogleButton from "../../components/Misc/GoogleButton/GoogleButton";
import InputWithIcon from "../../components/Misc/InputWithIcon/InputWithIcon";
import OrLine from "../../components/Misc/OrLine/OrLine";

import BackgroundImageOnLoad from "background-image-on-load";

import bgImage from "../../assets/Backgrounds/3-min.jpg";
import { connect } from "react-redux";

import { getGoogleUser } from "../../actions/actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bgIsLoaded, setBgIsLoaded] = useState(true);
  console.log("login props => ", props);

  return (
    <div
      className="cfb-login"
      style={{
        backgroundImage: `url(${
          !bgIsLoaded ? "https://picsum.photos/310/310?blur" : bgImage
        })`,
      }}
    >
      {/* <BackgroundImageOnLoad
        src={"https://unsplash.it/1200/310?random"}
        onLoadBg={() => setBgIsLoaded(true)}
        onError={(err) => console.log("error", err)}
      /> */}
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
            props.firebase.createUserWithEmailAndPassword(email, password)
          }
        />

        <OrLine />

        <GoogleButton
          text="Sign in with Google"
          callback={() => props.getGoogleUser(props.history)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

const mapDispatchToProps = { getGoogleUser };

// export default compose(
//   withFirebase,
//   connect(mapStateToProps, mapDispatchToProps)
// )(Login);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

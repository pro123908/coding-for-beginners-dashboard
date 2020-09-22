import React from "react";

const GoogleButton = ({ classes, text }) => {
  return (
    <button
      className={`button cfb-login__button-google google-button ${classes}`}
    >
      <i className="fab fa-google google-button__icon"></i>
      <span className="google-button__text">{text}</span>
    </button>
  );
};

export default GoogleButton;

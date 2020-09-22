import React from "react";

const ButtonWithIcon = ({ iconClass, buttonText }) => {
  return (
    <button className="button cfb-buttonWithIcon">
      <span className="cfb-buttonWithIcon__text">{buttonText}</span>
      <i className={`${iconClass} cfb-buttonWithIcon__icon`} />
    </button>
  );
};

export default ButtonWithIcon;

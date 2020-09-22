import React from "react";

const InputWithIcon = ({ iconClass = "fas fa-user", placeholder }) => {
  return (
    <div className="cfb-inputWithIcon">
      <i className={`${iconClass} cfb-inputWithIcon__icon`} />
      <input
        className="input cfb-inputWithIcon__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithIcon;

import React from "react";
import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

//if a type submit is passed into custom button, the button will get that

export default Button;

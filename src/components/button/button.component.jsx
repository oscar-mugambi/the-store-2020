import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

//if a type submit is passed into custom button, the button will get that

export default Button;

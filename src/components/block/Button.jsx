import React from "react";
import "./Button.css";

export const Button = ({ text, click, ...props }) => {
  return (
    <>
      <button className="btn" onClick={click} {...props}>
        {text}
      </button>
    </>
  );
};
export default Button;

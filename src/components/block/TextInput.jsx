import React from "react";
import "./TextInput.css";

export const TextInput = ({ ...props }) => {
  return (
    <>
      <input className="text-input" {...props} />
    </>
  );
};
export default TextInput;

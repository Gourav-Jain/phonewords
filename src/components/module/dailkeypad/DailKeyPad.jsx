import React from "react";
import { TextInput, Button } from "../../index";
import { useDailKeyPadContainer } from "./DailKeyPad.container";
import "./DailKeyPad.css";

const NumLetterBtn = ({ num, letters, click }) => {
  return (
    <div className="input" onClick={click}>
      <span>{num}</span>
      <p id="sub-char" className="small-input">
        {letters}
      </p>
    </div>
  );
};
export const DailKeyPad = () => {
  const {
    phonenumber,
    handleChange,
    handleClick,
    handleSubmit,
  } = useDailKeyPadContainer();
  return (
    <>
      <TextInput
        name="phonenumber"
        type="text"
        onChange={handleChange}
        readOnly
        value={phonenumber}
      />

      <div className="inner-container">
        <NumLetterBtn num={1} />
        <NumLetterBtn num={2} letters={"abc"} click={() => handleClick(2)} />
        <NumLetterBtn num={3} letters={"def"} click={() => handleClick(3)} />
      </div>
      <div className="inner-container">
        <NumLetterBtn num={4} letters={"ghi"} click={() => handleClick(4)} />
        <NumLetterBtn num={5} letters={"jkl"} click={() => handleClick(5)} />
        <NumLetterBtn num={6} letters={"mno"} click={() => handleClick(6)} />
      </div>
      <div className="inner-container">
        <NumLetterBtn num={7} letters={"pqrs"} click={() => handleClick(7)} />
        <NumLetterBtn num={8} letters={"tuv"} click={() => handleClick(8)} />
        <NumLetterBtn num={9} letters={"wxyz"} click={() => handleClick(9)} />
      </div>
      <div className="inner-container">
        <NumLetterBtn num={"*"} />
        <NumLetterBtn num={0} />
        <NumLetterBtn
          num={"#"}
          letters={"Clear"}
          click={() => handleClick(-1)}
        />
      </div>
      <div className="inner-container">
        <Button
          text="Click & Get Word List"
          click={handleSubmit}
          disabled={!phonenumber}
        />
      </div>
    </>
  );
};
export default DailKeyPad;

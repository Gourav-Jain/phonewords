import React from "react";
import "./ListOfWords.css";

export const ListOfWords = ({ list }) => {
  return (
    <div className="result">
      <h4>List Of Words</h4>
      <ul>
        {list.map((key, val) => (
          <li key={val}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfWords;

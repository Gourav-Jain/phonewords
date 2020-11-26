import React from "react";
import { DailKeyPad, ListOfWords, Loader } from "../../components";
import { useSelectorHook } from "../../utils";

export const Phoneword = () => {
  const { phoneword } = useSelectorHook();
  const { showLoader, error, listOfWords } = phoneword;
  return (
    <>
      <div className="container">
        <div className="top">
          <h2>Phoneword</h2>
          <DailKeyPad />
        </div>
      </div>
      {showLoader && <Loader />}
      {error && <label className="error">{error}</label>}
      {listOfWords.length > 0 && (
        <div className="container bottom">
          <ListOfWords list={listOfWords} />
        </div>
      )}
    </>
  );
};

export default Phoneword;

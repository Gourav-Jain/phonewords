import { useState } from "react";
import { useDispatch } from "react-redux";
import { getApiUrlByEnv } from "../../../utils";
import {
  setPhonewordRequest,
  setPhonewordResponse,
  setPhonewordFailer,
} from "../../../actions/action";

export const useDailKeyPadContainer = () => {
  const dispatch = useDispatch();

  const [phonenumber, setPhonenumber] = useState("");

  const handleChange = (e) => {
    setPhonenumber(e.target.value);
  };
  // handle click on dail key pad button
  const handleClick = (num) => {
    // if click on # button
    if (num === -1) {
      setPhonenumber("");
      dispatch(
        setPhonewordResponse({ showLoader: false, error: "", listOfWords: [] })
      );
    } else {
      if (phonenumber.length < 10) {
        setPhonenumber(phonenumber + num);
      }
    }
  };

  // call to backend server get the list of word
  const apiCallToGetWords = () => {
    dispatch(
      setPhonewordRequest({ showLoader: true, error: "", listOfWords: [] })
    );

    fetch(`${getApiUrlByEnv()}/?digit=${phonenumber}`)
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          return Promise.reject(res.statusText);
        }
      })
      .then((data) => {
        if (data) {
          dispatch(
            setPhonewordResponse({
              showLoader: false,
              error: "",
              listOfWords: data.result,
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          setPhonewordFailer({
            showLoader: false,
            error: err.message,
            listOfWords: [],
          })
        );
      });
  };

  // call on "Click & Get Word List"
  const handleSubmit = () => {
    apiCallToGetWords();
  };

  return {
    phonenumber,
    handleChange,
    handleClick,
    handleSubmit,
  };
};

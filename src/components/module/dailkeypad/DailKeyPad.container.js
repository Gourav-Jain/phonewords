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
    //
    if (num === -1) {
      setPhonenumber("");
      dispatch(setPhonewordResponse({ listOfWords: [] }));
    } else {
      if (phonenumber.length < 10) {
        setPhonenumber(phonenumber + num);
      }
    }
  };

  const apiCallToGetWords = () => {
    dispatch(setPhonewordRequest({ showLoader: true }));

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
        debugger;
        dispatch(
          setPhonewordFailer({
            listOfWords: [],
            showLoader: false,
            error: err,
          })
        );
      });
  };

  const handleSubmit = (e) => {
    apiCallToGetWords();
  };

  return {
    phonenumber,
    handleChange,
    handleClick,
    handleSubmit,
  };
};

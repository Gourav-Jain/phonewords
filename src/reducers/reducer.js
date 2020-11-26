import {
  PHONE_WORD_REQS,
  PHONE_WORD_RESP,
  PHONE_WORD_FAIL,
} from "../actions/action";
import initialState from "../store/initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PHONE_WORD_REQS:
      return {
        ...state,
        ...action.payload,
      };
    case PHONE_WORD_RESP:
      return { ...state, ...action.payload };
    case PHONE_WORD_FAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

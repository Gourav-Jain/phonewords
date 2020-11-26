/**
 * Action Types
 */
export const PHONE_WORD_REQS = "PHONE_WORD_REQS";
export const PHONE_WORD_RESP = "PHONE_WORD_RESP";
export const PHONE_WORD_FAIL = "PHONE_WORD_FAIL";

/**
 * Action Creator
 */
export const setPhonewordRequest = (payload) => ({
  type: PHONE_WORD_REQS,
  payload,
});
export const setPhonewordResponse = (payload) => ({
  type: PHONE_WORD_RESP,
  payload,
});
export const setPhonewordFailer = (payload) => ({
  type: PHONE_WORD_FAIL,
  payload,
});

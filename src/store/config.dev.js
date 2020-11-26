import { compose, applyMiddleware } from "redux";

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ middleware = [], enhancers = [] } = {}) => {
  return composeWithDevTools(applyMiddleware(...middleware), ...enhancers);
};

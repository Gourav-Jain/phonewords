import { combineReducers } from "redux";

// Features
import { reducer as phoneword } from "../reducers/reducer";

export default combineReducers({ phoneword, config: (state = {}) => state });

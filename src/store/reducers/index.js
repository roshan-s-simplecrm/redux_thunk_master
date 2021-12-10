import { combineReducers } from "redux";
import { api } from "../api";

import transactions from "./transactions";

const appReducer = combineReducers({
  transactions
});

export default (state, action) => {
  console.log("sssssssssssstate",state,action)
  return appReducer(state, action);
};
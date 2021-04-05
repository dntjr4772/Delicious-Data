import { combineReducers } from "redux";
import search from "./search/searchReducer";

const reducers = combineReducers({
  search,
});

export default reducers;

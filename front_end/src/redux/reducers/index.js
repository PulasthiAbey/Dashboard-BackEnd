import { combineReducers } from "redux";
import { chartReducer } from "./chartReducer";
const reducers = combineReducers({
  dummyChart: chartReducer,
});
export default reducers;

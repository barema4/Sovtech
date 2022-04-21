import { combineReducers } from "redux";
import recordingReducer from "./recordingReducer";

const rootReducer = combineReducers({
  recordingReducer,
});

export default rootReducer;

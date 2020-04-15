import { combineReducers } from "redux";
import catReducer from "./cat/cat.reducer";

const rootReducer = combineReducers({
  cat: catReducer,
});

export default rootReducer;

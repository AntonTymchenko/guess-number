import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tableReducer from "./numbers-table-helper-reducer";
import inputVariantsReducer from "./input-reducer";
import resultReducer from "./resultOfGame";

const rootReducer = combineReducers({
  numbers: tableReducer,
  variants: inputVariantsReducer,
  result: resultReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { createAction, createReducer } from "@reduxjs/toolkit";

export const addVariants = createAction("input/addVariants");
export const createdNumber = createAction("input/createdNumber");
export const resultOfVariants = createAction("input/resultOfVariants");
export const resetResultOfVariants = createAction(
  "input/resetResultOfVariants"
);
export const startBtnStatus = createAction("input/startBtnStatus");
export const resetStateForVariantsReducer = createAction(
  "input/resetStateForVariantsReducer"
);

const initialState = {
  createdNumber: null,
  variants: [],
  resultOfVariants: [],
  startBtnStatus: false,
};

const inputVariantsReducer = createReducer(initialState, {
  [addVariants]: (state, { payload }) => {
    state.variants = [...state.variants, payload];
  },
  [createdNumber]: (state, { payload }) => ({
    ...state,
    createdNumber: payload,
  }),
  [resultOfVariants]: (state, { payload }) => {
    state.resultOfVariants = [...state.resultOfVariants, payload];
  },
  [resetResultOfVariants]: (state) => {
    state.resultOfVariants = [];
  },
  [startBtnStatus]: (state, { payload }) => {
    state.startBtnStatus = payload;
  },
  [resetStateForVariantsReducer]: (state) => {
    state.variants = [];
    state.createdNumber = null;
    state.resultOfVariants = [];
    state.startBtnStatus = false;
  },
});

export default inputVariantsReducer;

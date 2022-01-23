import { createAction, createReducer } from "@reduxjs/toolkit";

export const changeStatus = createAction("table/status");
export const guessedNum = createAction("table/guessedNum");
export const resetStateOfNumbers = createAction("table/resetStateOfNumbers");

const initialState = {
  numbers: [
    { id: 0, checked: false, guessedNum: false },
    { id: 1, checked: false, guessedNum: false },
    { id: 2, checked: false, guessedNum: false },
    { id: 3, checked: false, guessedNum: false },
    { id: 4, checked: false, guessedNum: false },
    { id: 5, checked: false, guessedNum: false },
    { id: 6, checked: false, guessedNum: false },
    { id: 7, checked: false, guessedNum: false },
    { id: 8, checked: false, guessedNum: false },
    { id: 9, checked: false, guessedNum: false },
  ],
};

const tableReducer = createReducer(initialState, {
  [changeStatus]: (state, { payload }) => {
    state.numbers = state.numbers.map((item) =>
      item.id === payload ? { ...item, checked: !item.checked } : item
    );
  },
  [guessedNum]: (state, { payload }) => {
    state.numbers = state.numbers.map((item) =>
      item.id === payload ? { ...item, guessedNum: !item.guessedNum } : item
    );
  },
  [resetStateOfNumbers]: (state) => {
    state.numbers = state.numbers.map((item) => ({
      ...item,
      checked: false,
      guessedNum: false,
    }));
  },
});

export default tableReducer;

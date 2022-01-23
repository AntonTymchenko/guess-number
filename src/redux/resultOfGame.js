import { createAction, createReducer } from "@reduxjs/toolkit";

export const countOfMoves = createAction("countResult/countOfMoves");
export const isModalOpen = createAction("countResult/isModalOpen");

const initialState = {
  countOfMoves: [],
  isModalOpen: false,
};

const resultReducer = createReducer(initialState, {
  [countOfMoves]: (state, { payload }) => {
    state.countOfMoves = [...state.countOfMoves, payload.length];
  },
  [isModalOpen]: (state, { payload }) => {
    state.isModalOpen = payload;
  },
});

export default resultReducer;

import { createReducer, createAction, configureStore } from "@reduxjs/toolkit";

export const addToFirst = createAction("addToFirst");
export const addToSecond = createAction("addToSecond");
export const doNothing = createAction("donothing");
const valuesReducer = createReducer<{
  firstNumber: number;
  secondNumber: number;
  numbers: number[];
}>(
  {
    firstNumber: 0,
    secondNumber: 0,
    numbers: [],
  },
  (builder) => {
    builder.addCase(doNothing, (state) => ({ ...state }));
    builder.addCase(addToFirst, (state) => {
      state.firstNumber++;
      state.numbers = [state.firstNumber];
    });

    builder.addCase(addToSecond, (state) => {
      state.secondNumber++;
      state.numbers = [state.firstNumber];
    });
  }
);

// 1: create store
export const store = configureStore({
  reducer: valuesReducer,
});

// 1: create store
export type RootState = ReturnType<typeof store.getState>;

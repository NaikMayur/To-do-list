import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      if (state.number > 0) state.number -= 1;
    },
  },
});
export const { increment, decrement } = todoSlice.actions;
export default todoSlice.reducer;

"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  // You can add other user-related information here
}

interface AuthState {
  user: User | null; // Update the type to User | null
}

const initialState: AuthState = {
  user: null, // Change the initial value to null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null; // Change the value to null when logging out
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

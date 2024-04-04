import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log("state", state);
        console.log("action", action);
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("state", state);
        console.log("action", action);
      });
  },
});

export const authReducer = authSlice.reducer;

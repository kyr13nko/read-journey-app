import { createSlice } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { login, logout, refresh, register } from "./authOperations";
import { handleFulfilled, handleRejected } from "./authHelpers";

const initialState = {
  user: { name: null, email: null },
  isLogin: false,
  isRefreshing: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.token = payload.token;
        state.isLogin = true;
      })

      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.token = payload.token;
        state.isLogin = true;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
      })

      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addMatcher((action) => action.type.endsWith("fulfilled"), handleFulfilled)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);

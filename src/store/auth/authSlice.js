import { createSlice } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { login, refresh, register } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLogin: false,
  isRefreshing: false,
  token: null,
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
      });
  },
});

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(authConfig, authSlice.reducer);

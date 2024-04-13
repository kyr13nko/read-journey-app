import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  authHeader,
  fetchLogin,
  fetchLogout,
  fetchRefresh,
  fetchRegister,
} from "../../services/authAPI";

import { toast } from "react-toastify";

export const register = createAsyncThunk("auth/register", async (values, { rejectWithValue }) => {
  try {
    const { data } = await fetchRegister(values);
    authHeader.set(data.token);
    toast.success(`Welcome, ${data.name}`);
    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response);
  }
});

export const login = createAsyncThunk("auth/login", async (values, { rejectWithValue }) => {
  try {
    const { data } = await fetchLogin(values);
    authHeader.set(data.token);
    toast.success(`Welcome, ${data.name}`);
    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await fetchLogout();
    authHeader.clear();
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response);
  }
});

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) return rejectWithValue("Unable to fetch user");

    try {
      authHeader.set(persistedToken);
      const { data } = await fetchRefresh();

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

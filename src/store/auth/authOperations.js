import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk("auth/register", async (values, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("/users/signup", values);
    setAuthHeader(data.token);
    toast.success(`Welcome, ${data.name}`);
    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response);
  }
});

export const login = createAsyncThunk("auth/login", async (values, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("/users/signin", values);
    setAuthHeader(data.token);
    toast.success(`Welcome, ${data.name}`);
    return data;
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
      setAuthHeader(persistedToken);
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

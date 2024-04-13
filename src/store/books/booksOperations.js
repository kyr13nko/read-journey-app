import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRecommendedBooks } from "../../services/booksAPI";

export const getRecommendedBooks = createAsyncThunk(
  "books/recommended",
  async (values, { rejectWithValue }) => {
    const query = new URLSearchParams(values).toString();

    try {
      const { data } = await fetchRecommendedBooks(query);
      console.log("data:", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

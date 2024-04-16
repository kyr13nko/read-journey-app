import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchRecommendedBooks } from "../../services/booksAPI";

import { toast } from "react-toastify";

export const getRecommendedBooks = createAsyncThunk(
  "books/recommended",
  async (values, { rejectWithValue }) => {
    const query = new URLSearchParams(values).toString();

    try {
      const { data } = await fetchRecommendedBooks(query);

      if (values.page > data.totalPages) data.page = 1;
      return data;
    } catch (error) {
      if (error) toast.error(error.response.data.message);
      return rejectWithValue(error.response);
    }
  }
);

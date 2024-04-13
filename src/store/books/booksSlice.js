import { createSlice } from "@reduxjs/toolkit";
import { getRecommendedBooks } from "./booksOperations";

const initialState = {
  recommended: [],
  currentPage: 1,
  totalPages: 0,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    goToNextPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    goToPrevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRecommendedBooks.fulfilled, (state, { payload }) => {
      state.recommended = payload.results;
    });
  },
});

export const { goToNextPage, goToPrevPage } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

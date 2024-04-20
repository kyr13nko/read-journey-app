import { createSlice } from "@reduxjs/toolkit";
import {
  addBook,
  addBookById,
  delBookById,
  getOwnBooks,
  getRecommendedBooks,
} from "./booksOperations";

const initialState = {
  recommended: [],
  own: [],
  currentPage: 1,
  totalPages: 0,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    nextPage(state) {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    prevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedBooks.fulfilled, (state, { payload }) => {
        state.recommended = payload.results;
        state.currentPage = payload.page;
        state.totalPages = payload.totalPages;
      })

      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.own = [...state.own, payload];
      })

      .addCase(addBookById.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
      })

      .addCase(delBookById.fulfilled, (state, { payload }) => {
        state.own = state.own.filter((book) => book._id !== payload.id);
      })

      .addCase(getOwnBooks.fulfilled, (state, { payload }) => {
        state.own = payload;
      });
  },
});

export const { nextPage, prevPage } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

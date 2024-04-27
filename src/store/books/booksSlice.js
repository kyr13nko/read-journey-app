import { createSlice } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  addBook,
  addBookById,
  delBookById,
  getOwnBooks,
  getReadBook,
  getRecommendedBooks,
} from "./booksOperations";
import { handleFulfilled, handlePending, handleRejected } from "./booksHelpers";

const initialState = {
  recommended: [],
  own: [],
  read: "",
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  error: null,
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
        state.own = [...state.own, payload];
      })

      .addCase(delBookById.fulfilled, (state, { payload }) => {
        state.own = state.own.filter((book) => book._id !== payload.id);
      })

      .addCase(getOwnBooks.fulfilled, (state, { payload }) => {
        state.own = payload;
      })

      .addCase(getReadBook.fulfilled, (state, { payload }) => {
        state.read = payload;
      })

      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("fulfilled"), handleFulfilled)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

const authConfig = {
  key: "readBook",
  storage,
  whitelist: ["read"],
};

export const { nextPage, prevPage } = booksSlice.actions;
export const booksReducer = persistReducer(authConfig, booksSlice.reducer);

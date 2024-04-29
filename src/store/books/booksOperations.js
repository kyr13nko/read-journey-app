import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchAddBook,
  fetchAddBookById,
  fetchDelBookById,
  fetchOwnBooks,
  fetchReadBook,
  fetchReadBookDelete,
  fetchReadBookFinish,
  fetchReadBookStart,
  fetchRecommendedBooks,
} from "../../services/booksAPI";

import { toast } from "react-toastify";

export const getRecommendedBooks = createAsyncThunk(
  "books/recommended",
  async ({ limit, page = 1, title, author }, { rejectWithValue }) => {
    const params = {};

    if (limit) params.limit = limit;
    if (page) params.page = page;
    if (title) params.title = title;
    if (author) params.author = author;

    const query = new URLSearchParams(params).toString();

    try {
      const { data } = await fetchRecommendedBooks(query);
      if (page > data.totalPages) page = 1;
      return { ...data, page };
    } catch (error) {
      if (error) toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const addBook = createAsyncThunk("books/add", async (values, { rejectWithValue }) => {
  try {
    const { data } = await fetchAddBook(values);
    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response.data);
  }
});

export const addBookById = createAsyncThunk("books/addById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await fetchAddBookById(id);

    toast.success("This book added successfully!");
    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response.data);
  }
});

export const delBookById = createAsyncThunk("books/delById", async (id, { rejectWithValue }) => {
  try {
    const { data } = await fetchDelBookById(id);
    toast.success(data.message);
    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response.data);
  }
});

export const getOwnBooks = createAsyncThunk(
  "books/own",
  async (status = null, { rejectWithValue }) => {
    try {
      const { data } = await fetchOwnBooks(status);
      return data;
    } catch (error) {
      if (error) toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getReadBookStart = createAsyncThunk(
  "books/readStart",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await fetchReadBookStart(values);

      return data;
    } catch (error) {
      if (error) toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getReadBookFinish = createAsyncThunk(
  "books/readFinish",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await fetchReadBookFinish(values);

      return data;
    } catch (error) {
      if (error) toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getReadBookDelete = createAsyncThunk(
  "books/readDelete",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await fetchReadBookDelete(values);

      return data;
    } catch (error) {
      if (error) toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
export const getReadBook = createAsyncThunk("books/read", async (id, { rejectWithValue }) => {
  try {
    const { data } = await fetchReadBook(id);

    return data;
  } catch (error) {
    if (error) toast.error(error.response.data.message);
    return rejectWithValue(error.response.data);
  }
});

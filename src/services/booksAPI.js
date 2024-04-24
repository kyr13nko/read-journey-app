import axios from "axios";

export const fetchRecommendedBooks = (values) => axios.get(`books/recommend?${values}`);

export const fetchAddBook = (values) => axios.post("books/add", values);

export const fetchAddBookById = (id) => axios.post(`books/add/${id}`);

export const fetchDelBookById = (id) => axios.delete(`books/remove/${id}`);

export const fetchOwnBooks = (values) =>
  axios.get(values && values !== "all" ? `/books/own?status=${values}` : "/books/own");

import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api/";

export const fetchRecommendedBooks = (values) => axios.get(`books/recommend?${values}`);

export const fetchOwnBooks = (values) =>
  axios.get(values ? `/books/own?status=${values}` : `/books/own`);

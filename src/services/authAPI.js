import axios from "axios";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api/";

export const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const fetchRegister = (values) => axios.post("users/signup", values);

export const fetchLogin = (values) => axios.post("users/signin", values);

export const fetchLogout = () => axios.post("users/signout");

export const fetchRefresh = () => axios.get("users/current");

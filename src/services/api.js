import axios from "axios";

export const api = axios.create({
  baseURL: "https://book-api-auth.onrender.com",
  timeout: 10000,
});

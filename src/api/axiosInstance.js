import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://3f70d61b50d19212.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

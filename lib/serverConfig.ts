import axios from "axios";

export const proxyApi = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

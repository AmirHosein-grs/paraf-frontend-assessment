import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api/proxy",
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

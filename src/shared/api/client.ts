// import axios from "axios";

// import { env } from "@/shared/config";

// export const apiClient = axios.create({
//   baseURL: env.API_BASE_URL,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

import axios from "axios";

export const apiClient = axios.create({
  withCredentials: true,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});

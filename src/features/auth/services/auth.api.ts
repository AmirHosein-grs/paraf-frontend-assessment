// import { API_ENDPOINTS, apiClient, handleApiError } from "@/shared/api";

// import type { LoginResponse } from "../types/auth.types";

// import type { LoginRequest } from "../types/login.types";

// export async function login(payload: LoginRequest) {
//   try {
//     const { data } = await apiClient.post<LoginResponse>(
//       API_ENDPOINTS.AUTH.LOGIN,

//       payload,
//     );
//     return data.result;
//   } catch (error) {
//     return handleApiError(error);
//   }
// }

import { apiClient } from "@/shared/api";

import type { LoginRequest } from "../types/login.types";

export async function login(payload: LoginRequest) {
  await apiClient.post("/api/auth/login", payload);
}

export async function me() {
  const { data } = await apiClient.get("/api/auth/me");

  return data.result;
}

export async function logout() {
  await apiClient.post("/api/auth/logout");
}

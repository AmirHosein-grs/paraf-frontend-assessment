import { API_ENDPOINTS, apiClient, handleApiError } from "@/shared/api";

import type { LoginResponse } from "../types/auth.types";

import type { LoginRequest } from "../types/login.types";

export async function login(payload: LoginRequest) {
  try {
    const { data } = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,

      payload,
    );
    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

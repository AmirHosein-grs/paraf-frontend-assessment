import { apiClient } from "@/shared/api";
import { API_ENDPOINTS } from "@/shared/api/endpoints";

import type { AuthTokens } from "../types/auth.types";
import type { LoginRequest } from "../types/login.types";
import type { User } from "../../../shared/types/user.types";
import { ApiResponse } from "@/shared/api";

export async function login(
  data: LoginRequest,
): Promise<ApiResponse<AuthTokens>> {
  const response = await apiClient.post<ApiResponse<AuthTokens>>(
    API_ENDPOINTS.AUTH.LOGIN,
    data,
  );

  return response.data;
}

export async function getMe(): Promise<ApiResponse<User>> {
  const response = await apiClient.get<ApiResponse<User>>(
    API_ENDPOINTS.AUTH.ME,
  );

  return response.data;
}

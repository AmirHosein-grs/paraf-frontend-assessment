import { apiClient } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";

import type { AuthTokens } from "../types/auth.types";
import type { LoginRequest } from "../types/login.types";
import type { User } from "../types/user.types";
import { ApiResponse } from "@/shared/api";

export async function login(
  data: LoginRequest,
): Promise<ApiResponse<AuthTokens>> {
  const response = await apiClient.post<ApiResponse<AuthTokens>>(
    ENDPOINTS.LOGIN,
    data,
  );

  return response.data;
}

export async function getMe(): Promise<ApiResponse<User>> {
  const response = await apiClient.get<ApiResponse<User>>(ENDPOINTS.ME);

  return response.data;
}

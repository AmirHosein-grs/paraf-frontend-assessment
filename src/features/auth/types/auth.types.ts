import { ApiResponse } from "@/shared/api";

export interface LoginTokens {
  accessToken: string;
  refreshToken: string;
}

export type LoginResponse = ApiResponse<LoginTokens>;

import { apiClient } from "@/shared/api";
import type { UserProfileResponse } from "@/features/auth/types/user.types";

export const getProfile = async () => {
  const { data } = await apiClient.get<UserProfileResponse>("/users/me");

  return data.result;
};

export const getDashboardSummary = async () => {
  const { data } = await apiClient.get("/customer-club/summary");

  return data.result;
};

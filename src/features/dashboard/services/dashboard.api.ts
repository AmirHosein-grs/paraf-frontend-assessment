import { apiClient } from "@/shared/api";
import type { UserProfileResponse } from "@/shared/types/user.types";
import { DashboardSummaryResponse } from "../types/dashboard.types";

export const getProfile = async () => {
  const { data } = await apiClient.get<UserProfileResponse>("/users/me");

  return data.result;
};

export const getDashboardSummary = async () => {
  const { data } = await apiClient.get<DashboardSummaryResponse>(
    "/customer-club/summary",
  );

  return data.result;
};

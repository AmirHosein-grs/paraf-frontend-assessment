import { apiClient } from "@/shared/api";
import { DashboardSummaryResponse } from "../types/dashboard.types";

export const getDashboardSummary = async () => {
  const { data } = await apiClient.get<DashboardSummaryResponse>(
    "/customer-club/summary",
  );

  return data.result;
};

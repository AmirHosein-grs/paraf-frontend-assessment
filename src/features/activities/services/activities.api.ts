import { apiClient } from "@/shared/api";
import { API_ENDPOINTS } from "@/shared/constants/api-endpoints";

import type { RecentActivitiesResponse } from "../types/activity.types";

export async function getRecentActivities() {
  const { data } = await apiClient.get<RecentActivitiesResponse>(
    API_ENDPOINTS.ACTIVITIES.LIST,
  );

  return data;
}

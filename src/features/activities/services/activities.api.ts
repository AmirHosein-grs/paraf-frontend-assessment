import { apiClient, handleApiError } from "@/shared/api";

import type { RecentActivitiesResponse } from "../types/activity.types";

export async function getRecentActivities() {
  try {
    const { data } =
      await apiClient.get<RecentActivitiesResponse>("/api/activities");
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

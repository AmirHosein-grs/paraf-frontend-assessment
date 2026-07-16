import { ApiResponse } from "@/shared/api";

export interface Activity {
  id: number;
}

export interface ActivityTotal {
  count: number;
}

export interface RecentActivitiesResponse extends ApiResponse<Activity[]> {
  total: ActivityTotal[];
}

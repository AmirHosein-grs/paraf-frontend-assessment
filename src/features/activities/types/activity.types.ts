import { ApiResponse } from "@/shared/api";

export interface Activity {
  id: number;
  //  Backend model
}

export interface ActivityTotal {
  count: number;
}

export interface RecentActivitiesResponse extends ApiResponse<Activity[]> {
  total: ActivityTotal[];
}

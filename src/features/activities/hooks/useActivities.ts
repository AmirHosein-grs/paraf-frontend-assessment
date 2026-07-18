"use client";

import { useQuery } from "@tanstack/react-query";
import { getRecentActivities } from "../services/activities.api";
import { RecentActivitiesResponse } from "../types/activity.types";

export function useActivities() {
  return useQuery<RecentActivitiesResponse>({
    queryKey: ["recent-activities"],
    queryFn: getRecentActivities,
  });
}

"use client";

import { useQuery } from "@tanstack/react-query";

import { getRecentActivities } from "../services/activities.api";

export function useActivities() {
  return useQuery({
    queryKey: ["recent-activities"],
    queryFn: getRecentActivities,
  });
}

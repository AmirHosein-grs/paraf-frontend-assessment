"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "../services/dashboard.api";

export function useDashboardSummary() {
  return useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: getDashboardSummary,
  });
}

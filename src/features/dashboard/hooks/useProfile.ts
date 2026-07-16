"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/dashboard.api";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
}

"use client";

import { useQuery } from "@tanstack/react-query";

import { getLevels } from "../services/levels.api";

export function useLevels() {
  return useQuery({
    queryKey: ["levels"],
    queryFn: getLevels,
  });
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { getLevels } from "../services/levels.api";
import type { Level } from "../types/level.types";

export function useLevels() {
  return useQuery<Level[]>({
    queryKey: ["levels"],
    queryFn: getLevels,
  });
}

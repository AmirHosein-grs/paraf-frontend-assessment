"use client";

import { useQuery } from "@tanstack/react-query";
import { getLevels } from "../services/levels.api";
import { Level } from "../types/levels.types";

export function useLevels() {
  return useQuery<Level[]>({
    queryKey: ["levels"],
    queryFn: getLevels,
  });
}

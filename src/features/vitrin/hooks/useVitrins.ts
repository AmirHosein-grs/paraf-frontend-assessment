"use client";

import { useQuery } from "@tanstack/react-query";

import { getUserVitrins, getVitrin } from "../services/vitrins.api";

export function useUserVitrins() {
  return useQuery({
    queryKey: ["user-vitrins"],
    queryFn: getUserVitrins,
  });
}

export function useVitrin(id: number) {
  return useQuery({
    queryKey: ["vitrin", id],
    queryFn: () => getVitrin(id),
    enabled: !!id,
  });
}

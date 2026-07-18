"use client";

import { useQuery } from "@tanstack/react-query";

import { getUserVitrins, getVitrin } from "../services/vitrins.api";
import { UserVitrin, VitrinDetail } from "../types/vitrin.types";

export function useUserVitrins() {
  return useQuery<UserVitrin[]>({
    queryKey: ["user-vitrins"],
    queryFn: getUserVitrins,
  });
}

export function useVitrin(id: number) {
  return useQuery<VitrinDetail>({
    queryKey: ["vitrin", id],
    queryFn: () => getVitrin(id),
    enabled: !!id,
  });
}

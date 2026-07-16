"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getCustomerClubSummary,
  getCustomerClubVitrinSummary,
} from "../services/customer-club.api";

export function useCustomerClub() {
  return useQuery({
    queryKey: ["customer-club-summary"],
    queryFn: getCustomerClubSummary,
  });
}

export function useCustomerClubVitrin(vitrinId: number) {
  return useQuery({
    queryKey: ["customer-club-vitrin-summary", vitrinId],
    queryFn: () => getCustomerClubVitrinSummary(vitrinId),
  });
}

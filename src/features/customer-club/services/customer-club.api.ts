import { apiClient } from "@/shared/api";

import {
  CustomerClubSummaryResponse,
  CustomerClubVitrinSummaryResponse,
} from "../types/customerClub.types";

export async function getCustomerClubSummary() {
  const { data } = await apiClient.post<CustomerClubSummaryResponse>(
    "/customer-club/summary",
  );

  return data.result;
}

export async function getCustomerClubVitrinSummary(vitrinId: number) {
  const { data } = await apiClient.post<CustomerClubVitrinSummaryResponse>(
    `/customer-club/summary-user-vitrin/${vitrinId}`,
  );

  return data.result;
}

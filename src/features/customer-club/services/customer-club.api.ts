// src/features/customer-club/services/customer-club.api.ts
import { apiClient, handleApiError } from "@/shared/api";
import {
  CustomerClubSummaryResponse,
  CustomerClubVitrinSummaryResponse,
} from "../types/customer-club.types";

export async function getCustomerClubSummary() {
  try {
    const { data } = await apiClient.get<CustomerClubSummaryResponse>(
      "/api/customer-club/summary",
    );
    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getCustomerClubVitrinSummary(vitrinId: number) {
  try {
    const { data } = await apiClient.get<CustomerClubVitrinSummaryResponse>(
      `/api/customer-club/summary-vitrin/${vitrinId}`,
    );

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

import { API_ENDPOINTS, apiClient, handleApiError } from "@/shared/api";
import {
  CustomerClubSummaryResponse,
  CustomerClubVitrinSummaryResponse,
} from "../types/customer-club.types";

export async function getCustomerClubSummary() {
  try {
    const { data } = await apiClient.get<CustomerClubSummaryResponse>(
      API_ENDPOINTS.CUSTOMER_CLUB.SUMMARY,
    );
    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getCustomerClubVitrinSummary(vitrinId: number) {
  try {
    const { data } = await apiClient.get<CustomerClubVitrinSummaryResponse>(
      API_ENDPOINTS.CUSTOMER_CLUB.SUMMARY_VITRIN(vitrinId),
    );
    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

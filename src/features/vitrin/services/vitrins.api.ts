import { API_ENDPOINTS, apiClient, handleApiError } from "@/shared/api";

import type {
  UserVitrinsResponse,
  VitrinDetailResponse,
} from "../types/vitrin.types";

export async function getUserVitrins() {
  try {
    const { data } = await apiClient.get<UserVitrinsResponse>(
      API_ENDPOINTS.VITRINS.LIST,
    );

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getVitrin(id: number) {
  try {
    const { data } = await apiClient.get<VitrinDetailResponse>(
      API_ENDPOINTS.VITRINS.DETAIL(id),
    );

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

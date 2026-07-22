import { API_ENDPOINTS, apiClient, handleApiError } from "@/shared/api";

import type {
  UserVitrin,
  UserVitrinsResponse,
  VitrinDetail,
  VitrinDetailResponse,
} from "../types/vitrin.types";

export async function getUserVitrins(): Promise<UserVitrin[]> {
  try {
    const { data } = await apiClient.get<UserVitrinsResponse>(
      API_ENDPOINTS.VITRINS.LIST,
    );
    return data.result;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

export async function getVitrin(id: number): Promise<VitrinDetail> {
  try {
    const { data } = await apiClient.get<VitrinDetailResponse>(
      API_ENDPOINTS.VITRINS.DETAIL(id),
    );
    return data.result;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

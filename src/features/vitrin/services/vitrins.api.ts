import { apiClient, handleApiError } from "@/shared/api";

import type {
  UserVitrinsResponse,
  VitrinDetailResponse,
} from "../types/vitrin.types";

export async function getUserVitrins() {
  try {
    const { data } = await apiClient.get<UserVitrinsResponse>("/api/vitrins");

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getVitrin(id: number) {
  try {
    const { data } = await apiClient.get<VitrinDetailResponse>(
      `/api/vitrins/${id}`,
    );

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

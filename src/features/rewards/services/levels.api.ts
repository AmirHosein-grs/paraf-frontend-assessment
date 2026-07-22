import { apiClient } from "@/shared/api/client";

import { API_ENDPOINTS, handleApiError } from "@/shared/api";
import { LevelsResponse } from "../types/levels.types";

export async function getLevels() {
  try {
    const { data } = await apiClient.get<LevelsResponse>(
      API_ENDPOINTS.LEVELS.LIST,
    );

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

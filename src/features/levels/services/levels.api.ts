import { apiClient } from "@/shared/api/client";

import type { LevelsResponse } from "../types/level.types";
import { API_ENDPOINTS, handleApiError } from "@/shared/api";

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

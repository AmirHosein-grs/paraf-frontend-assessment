import { apiClient } from "@/shared/api/client";

import type { LevelsResponse } from "../types/level.types";
import { handleApiError } from "@/shared/api";

export async function getLevels() {
  try {
    const { data } = await apiClient.get<LevelsResponse>("/api/levels");

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

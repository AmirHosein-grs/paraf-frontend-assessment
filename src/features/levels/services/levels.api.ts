import { apiClient } from "@/shared/api/client";

import type { LevelsResponse } from "../types/level.types";

export async function getLevels() {
  const { data } = await apiClient.get<LevelsResponse>("/levels");

  return data.result;
}

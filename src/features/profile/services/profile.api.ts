import { apiClient } from "@/shared/api/client";

import type { UserProfileResponse } from "@/shared/types/user.types";

export async function getProfile() {
  const { data } = await apiClient.get<UserProfileResponse>("/users/me");

  return data.result;
}

import type { UserProfileResponse } from "@/shared/types/user.types";

import { apiClient, handleApiError } from "@/shared/api";

export async function getProfile() {
  try {
    const { data } = await apiClient.get<UserProfileResponse>("/api/profile");

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

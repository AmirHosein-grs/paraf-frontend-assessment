import type { UserProfileResponse } from "@/shared/types/user.types";

import { API_ENDPOINTS, apiClient, handleApiError } from "@/shared/api";

export async function getProfile() {
  try {
    const { data } = await apiClient.get<UserProfileResponse>(
      API_ENDPOINTS.AUTH.ME,
    );

    return data.result;
  } catch (error) {
    return handleApiError(error);
  }
}

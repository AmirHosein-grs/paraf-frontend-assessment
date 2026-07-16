import { apiClient } from "@/shared/api";

export async function logout() {
  await apiClient.post("/api/auth/logout");
}

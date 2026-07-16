import { cookies } from "next/headers";

import { env } from "@/shared/config";

export async function proxyRequest(endpoint: string, options?: RequestInit) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const response = await fetch(`${env.API_BASE_URL}${endpoint}`, {
    ...options,

    headers: {
      ...(options?.headers ?? {}),

      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

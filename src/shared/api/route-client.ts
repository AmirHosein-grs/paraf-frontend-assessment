import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { env } from "@/shared/config";

interface ProxyRequestOptions extends RequestInit {
  endpoint: string;
}

export async function proxyRequest({
  endpoint,
  headers,
  ...options
}: ProxyRequestOptions) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const requestHeaders = new Headers(headers);

  requestHeaders.set("Content-Type", "application/json");

  if (accessToken) {
    requestHeaders.set("Authorization", `Bearer ${accessToken}`);
  }

  return fetch(`${env.API_BASE_URL}${endpoint}`, {
    ...options,
    headers: requestHeaders,
    cache: "no-store",
  });
}

export async function forwardJson(
  endpoint: string,
  options?: Omit<ProxyRequestOptions, "endpoint">,
) {
  const response = await proxyRequest({
    endpoint,
    ...options,
  });

  const data = await response.json().catch(() => null);

  return NextResponse.json(data, {
    status: response.status,
  });
}

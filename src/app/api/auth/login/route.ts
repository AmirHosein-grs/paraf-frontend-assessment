import { NextRequest, NextResponse } from "next/server";
import { env } from "@/shared/config/env";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from "@/shared/lib/auth-cookies";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const loginRes = await fetch(`${env.BACKEND_API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const loginData = await loginRes.json();

  if (!loginRes.ok || !loginData?.result?.accessToken) {
    return NextResponse.json(
      {
        message: loginData?.error?.message ?? "Login failed",
        code: loginData?.error?.code,
      },
      { status: loginRes.status || 401 },
    );
  }

  const { accessToken, refreshToken } = loginData.result;

  const meRes = await fetch(`${env.BACKEND_API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const meData = meRes.ok ? await meRes.json() : null;

  const response = NextResponse.json({ user: meData?.result ?? null });

  response.cookies.set(
    ACCESS_TOKEN_COOKIE,
    accessToken,
    accessTokenCookieOptions(accessToken),
  );
  response.cookies.set(
    REFRESH_TOKEN_COOKIE,
    refreshToken,
    refreshTokenCookieOptions(refreshToken),
  );

  return response;
}

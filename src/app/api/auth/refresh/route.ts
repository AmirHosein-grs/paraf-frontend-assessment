// app/api/auth/refresh/route.ts
import { NextRequest, NextResponse } from "next/server";
import { env } from "@/shared/config/env";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
  expiredCookieOptions,
} from "@/shared/lib/auth-cookies";

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;

  if (!refreshToken) {
    return NextResponse.json({ message: "No session" }, { status: 401 });
  }

  // ⚠️ BACKEND DEPENDENCY: endpoint + payload shape are provisional.
  // Update this path/body/response-mapping once the backend ships it —
  // nothing else in the app needs to change.
  const refreshRes = await fetch(`${env.BACKEND_API_URL}/users/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!refreshRes.ok) {
    const response = NextResponse.json(
      { message: "Session expired" },
      { status: 401 },
    );
    response.cookies.set(ACCESS_TOKEN_COOKIE, "", expiredCookieOptions());
    response.cookies.set(REFRESH_TOKEN_COOKIE, "", expiredCookieOptions());
    return response;
  }

  const refreshData = await refreshRes.json();
  const newAccessToken: string = refreshData.result.accessToken;
  const newRefreshToken: string = refreshData.result.refreshToken;

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    ACCESS_TOKEN_COOKIE,
    newAccessToken,
    accessTokenCookieOptions(newAccessToken),
  );
  response.cookies.set(
    REFRESH_TOKEN_COOKIE,
    newRefreshToken,
    refreshTokenCookieOptions(newRefreshToken),
  );
  return response;
}

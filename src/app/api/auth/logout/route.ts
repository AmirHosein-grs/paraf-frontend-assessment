import { NextResponse } from "next/server";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  expiredCookieOptions,
} from "@/shared/lib/auth-cookies";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_TOKEN_COOKIE, "", expiredCookieOptions());
  response.cookies.set(REFRESH_TOKEN_COOKIE, "", expiredCookieOptions());
  return response;
}

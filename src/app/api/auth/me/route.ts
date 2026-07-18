// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from "next/server";
import { env } from "@/shared/config/env";
import { ACCESS_TOKEN_COOKIE } from "@/shared/lib/auth-cookies";

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

  if (!accessToken) {
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
  }

  const meRes = await fetch(`${env.BACKEND_API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!meRes.ok) {
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
  }

  const meData = await meRes.json();
  return NextResponse.json({ user: meData.result });
}

import { NextRequest, NextResponse } from "next/server";
import { env } from "@/shared/config/env";
import { ACCESS_TOKEN_COOKIE } from "@/shared/lib/auth-cookies";

const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

async function handler(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

  if (!accessToken) {
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
  }

  const { path } = await params;
  const targetPath = path.join("/");
  const search = request.nextUrl.search;
  const targetUrl = `${env.BACKEND_API_URL}/${targetPath}${search}`;

  const hasBody = !["GET", "HEAD"].includes(request.method);

  const backendRes = await fetch(targetUrl, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: hasBody ? await request.text() : undefined,
  });

  const contentType = backendRes.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json")
    ? await backendRes.json()
    : await backendRes.text();

  return NextResponse.json(data, { status: backendRes.status });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;

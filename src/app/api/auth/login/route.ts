import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { env } from "@/shared/config";
import { API_ENDPOINTS } from "@/shared/constants/api-endpoints";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const backendResponse = await fetch(
      `${env.API_BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(data, {
        status: backendResponse.status,
      });
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", data.result.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });

    cookieStore.set("refreshToken", data.result.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    console.log("object");
    return NextResponse.json(
      {
        message: "Internal Error",
      },
      {
        status: 500,
      },
    );
  }
}

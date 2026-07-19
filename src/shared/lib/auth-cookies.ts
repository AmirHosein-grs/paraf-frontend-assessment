import "server-only";

export const ACCESS_TOKEN_COOKIE = "accessToken";
export const REFRESH_TOKEN_COOKIE = "refreshToken";

interface CookieOptions {
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax";
  path: string;
  maxAge: number;
}

export function decodeJwtExp(token: string): number | null {
  try {
    const payloadB64 = token.split(".")[1];
    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf-8"),
    );
    return typeof payload.exp === "number" ? payload.exp : null;
  } catch {
    return null;
  }
}

function maxAgeFromToken(token: string, fallbackSeconds: number): number {
  const exp = decodeJwtExp(token);
  if (!exp) return fallbackSeconds;
  const secondsRemaining = exp - Math.floor(Date.now() / 1000);
  return secondsRemaining > 0 ? secondsRemaining : 0;
}

function baseCookieOptions(maxAge: number): CookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  };
}

export function accessTokenCookieOptions(accessToken: string): CookieOptions {
  return baseCookieOptions(maxAgeFromToken(accessToken, 15 * 60));
}

export function refreshTokenCookieOptions(refreshToken: string): CookieOptions {
  return baseCookieOptions(maxAgeFromToken(refreshToken, 7 * 24 * 60 * 60));
}

export function expiredCookieOptions(): CookieOptions {
  return { ...baseCookieOptions(0) };
}

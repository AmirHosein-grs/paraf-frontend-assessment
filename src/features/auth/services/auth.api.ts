// features/auth/services/auth.api.ts
import type { LoginRequest } from "../types/login.types";
import type { User } from "@/shared/types/user.types";

export interface LoginResult {
  user: User | null;
}

async function parseJsonOrThrow(res: Response) {
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw {
      status: res.status,
      code: data?.code,
      message: data?.message ?? "Unexpected error",
    };
  }
  return data;
}

export async function login(payload: LoginRequest): Promise<LoginResult> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseJsonOrThrow(res);
}

export async function logout(): Promise<void> {
  await fetch("/api/auth/logout", { method: "POST" });
}

export async function fetchSession(): Promise<{ user: User }> {
  const res = await fetch("/api/auth/me");
  return parseJsonOrThrow(res);
}

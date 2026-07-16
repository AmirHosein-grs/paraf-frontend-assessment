"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "../services/auth.api";
import { useAuthStore } from "../store/auth.store";
import type { ApiError } from "@/shared/api/error.types";
import type { LoginTokens } from "../types/auth.types";
import type { LoginRequest } from "../types/login.types";

export function useLogin() {
  const setTokens = useAuthStore((state) => state.setTokens);
  const router = useRouter();

  return useMutation<LoginTokens, ApiError, LoginRequest>({
    mutationFn: login,

    onSuccess: (result) => {
      setTokens(result.accessToken, result.refreshToken);

      const isProd = process.env.NODE_ENV === "production";
      const secureFlag = isProd ? "Secure;" : "";

      document.cookie = `accessToken=${result.accessToken}; path=/; max-age=86400; SameSite=Lax; ${secureFlag}`;
      document.cookie = `refreshToken=${result.refreshToken}; path=/; max-age=604800; SameSite=Lax; ${secureFlag}`;

      router.push("/dashboard");
    },
  });
}

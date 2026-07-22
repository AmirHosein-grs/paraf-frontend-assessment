"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login } from "../services/auth.api";
import { useAuthStore } from "../store/auth.store";
import type { LoginResult } from "../services/auth.api";
import type { LoginRequest } from "../types/login.types";

interface LoginError {
  status: number;
  code?: number;
  message: string;
}

export function useLogin() {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  return useMutation<LoginResult, LoginError, LoginRequest>({
    mutationFn: login,
    onSuccess: (result) => {
      setUser(result.user);
      router.push("/club");
    },
  });
}

"use client";

import { useMutation } from "@tanstack/react-query";

import { useAuthStore } from "../store/auth.store";
import { login } from "../services/auth.api";

export function useLogin() {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      setTokens(data.result.accessToken, data.result.refreshToken);

      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);

      document.cookie = `accessToken=${data.result.accessToken}; path=/`;
    },
  });
}

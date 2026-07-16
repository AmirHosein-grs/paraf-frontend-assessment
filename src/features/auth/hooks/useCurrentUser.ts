"use client";

import { useQuery } from "@tanstack/react-query";

import { me } from "../services/auth.api";

import { useAuthStore } from "../store/auth.store";

export function useCurrentUser() {
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["me"],

    queryFn: async () => {
      const user = await me();

      setUser(user);

      return user;
    },
  });
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchSession } from "../services/auth.api";
import { useAuthStore } from "../store/auth.store";

export function useSession() {
  const setUser = useAuthStore((state) => state.setUser);
  const clear = useAuthStore((state) => state.clear);

  const query = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    retry: false,
    staleTime: 60_000,
  });

  useEffect(() => {
    if (query.data?.user) {
      setUser(query.data.user);
    } else if (query.isError) {
      clear();
    }
  }, [query.data, query.isError, setUser, clear]);

  return query;
}

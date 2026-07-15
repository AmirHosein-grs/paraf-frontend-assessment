"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "../store/auth.store";
import { getMe } from "../services/auth.api";

export function useMe() {
  const setUser = useAuthStore((state) => state.setUser);

  const query = useQuery({
    queryKey: ["user-me"],

    queryFn: getMe,

    retry: false,
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data.result);
    }
  }, [query.data, setUser]);

  return query;
}

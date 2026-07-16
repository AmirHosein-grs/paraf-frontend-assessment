"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useAuthStore } from "../store/auth.store";
import { getMe } from "../services/auth.api";
import { QUERY_KEYS } from "@/shared/constants/query-keys";

export function useMe() {
  const setUser = useAuthStore((state) => state.setUser);

  const query = useQuery({
    queryKey: QUERY_KEYS.auth.me,

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

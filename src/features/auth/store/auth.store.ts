import { create } from "zustand";

import type { AuthState } from "../types/auth-store.types";

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,

  refreshToken: null,

  user: null,

  setTokens: (accessToken, refreshToken) =>
    set({
      accessToken,
      refreshToken,
    }),

  setUser: (user) =>
    set({
      user,
    }),

  logout: () =>
    set({
      accessToken: null,
      refreshToken: null,
      user: null,
    }),
}));

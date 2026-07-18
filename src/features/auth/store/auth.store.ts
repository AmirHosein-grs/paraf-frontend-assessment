import { create } from "zustand";
import type { AuthState } from "../types/auth-store.types";

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  clear: () => set({ user: null, isAuthenticated: false }),
}));

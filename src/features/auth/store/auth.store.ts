// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import type { AuthState } from "../types/auth-store.types";

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       accessToken: null,
//       refreshToken: null,
//       user: null,

//       setTokens: (accessToken, refreshToken) =>
//         set({
//           accessToken,
//           refreshToken,
//         }),

//       setUser: (user) =>
//         set({
//           user,
//         }),

//       logout: () => {
//         document.cookie =
//           "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
//         document.cookie =
//           "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
//         set({
//           accessToken: null,
//           refreshToken: null,
//           user: null,
//         });
//       },
//     }),
//     {
//       name: "auth-storage",
//       storage: createJSONStorage(() => localStorage),
//       partialize: (state) => ({
//         accessToken: state.accessToken,
//         refreshToken: state.refreshToken,
//         user: state.user,
//       }),
//     },
//   ),
// );
import { create } from "zustand";

import type { User } from "@/shared/types/user.types";

interface AuthState {
  user: User | null;

  isAuthenticated: boolean;

  setUser: (user: User | null) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,

  setUser(user) {
    set({
      user,
      isAuthenticated: !!user,
    });
  },

  logout() {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));

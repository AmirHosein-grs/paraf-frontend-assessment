import type { User } from "@/shared/types/user.types";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  setUser: (user: User | null) => void;

  clear: () => void;
}

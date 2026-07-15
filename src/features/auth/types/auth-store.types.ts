import type { User } from "./user.types";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;

  setTokens: (accessToken: string, refreshToken: string) => void;

  setUser: (user: User) => void;

  logout: () => void;
}

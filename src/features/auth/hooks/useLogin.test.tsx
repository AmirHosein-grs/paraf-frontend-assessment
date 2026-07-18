import { describe, expect, it, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useLogin } from "./useLogin";
import { login } from "../services/auth.api";
import { AuthState } from "../types/auth-store.types";

const push = vi.fn();
const setTokens = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push,
  }),
}));

vi.mock("../services/auth.api", () => ({
  login: vi.fn(),
}));

vi.mock("../store/auth.store", () => ({
  useAuthStore: <T,>(selector: (state: AuthState) => T) =>
    selector({
      accessToken: null,
      refreshToken: null,
      user: null,
      setTokens,
      setUser: vi.fn(),
      logout: vi.fn(),
    }),
}));

function wrapper({ children }: { children: React.ReactNode }) {
  const client = new QueryClient({
    defaultOptions: {
      mutations: {
        retry: false,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

describe("useLogin", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.cookie = "";
  });

  it("stores tokens and redirects after successful login", async () => {
    vi.mocked(login).mockResolvedValue({
      accessToken: "access-token",
      refreshToken: "refresh-token",
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper,
    });

    result.current.mutate({
      phone: "989123456789",
      password: "12345678",
    });

    await waitFor(() => {
      expect(setTokens).toHaveBeenCalledWith("access-token", "refresh-token");
    });

    expect(push).toHaveBeenCalledWith("/dashboard");

    expect(document.cookie).toContain("accessToken=access-token");
    expect(document.cookie).toContain("refreshToken=refresh-token");
  });
});

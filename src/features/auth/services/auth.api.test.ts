import { describe, expect, it, vi, beforeEach } from "vitest";

import { login } from "./auth.api";

import { apiClient } from "@/shared/api";

vi.mock("@/shared/api", () => ({
  apiClient: {
    post: vi.fn(),
  },

  API_ENDPOINTS: {
    AUTH: {
      LOGIN: "/login",
    },
  },

  handleApiError: vi.fn(),
}));

describe("login", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns result", async () => {
    vi.mocked(apiClient.post).mockResolvedValue({
      data: {
        result: {
          accessToken: "access",
          refreshToken: "refresh",
        },
      },
    });

    const result = await login({
      phone: "989123456789",
      password: "12345678",
    });

    expect(result.accessToken).toBe("access");
    expect(result.refreshToken).toBe("refresh");
  });
});

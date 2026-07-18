import { describe, expect, it, vi } from "vitest";

vi.mock("@/shared/config", () => ({
  env: {
    API_BASE_URL: "http://localhost:3000",
  },
}));

import { apiClient } from "./client";

describe("apiClient", () => {
  it("has correct timeout", () => {
    expect(apiClient.defaults.timeout).toBe(10000);
  });

  it("sends json", () => {
    expect(apiClient.defaults.headers["Content-Type"]).toBe("application/json");
  });

  it("uses credentials", () => {
    expect(apiClient.defaults.withCredentials).toBe(true);
  });
});

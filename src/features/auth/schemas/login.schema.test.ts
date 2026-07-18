import { describe, expect, it } from "vitest";
import { loginSchema } from "./login.schema";

describe("loginSchema", () => {
  it("accepts valid data", () => {
    const result = loginSchema.safeParse({
      phone: "989123456789",
      password: "12345678",
    });

    expect(result.success).toBe(true);
  });

  it("rejects short phone", () => {
    const result = loginSchema.safeParse({
      phone: "0912",
      password: "12345678",
    });

    expect(result.success).toBe(false);
  });

  it("rejects short password", () => {
    const result = loginSchema.safeParse({
      phone: "989123456789",
      password: "123",
    });

    expect(result.success).toBe(false);
  });
});

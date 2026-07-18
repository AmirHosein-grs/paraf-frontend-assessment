import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn", () => {
  it("should merge classes", () => {
    expect(cn("a", "b")).toBe("a b");
  });
});

import { describe, expect, it } from "vitest";
import { SgButton, SgButtonText } from "./index";

describe("package entry", () => {
  it("exports both components", () => {
    expect(SgButton).toBeDefined();
    expect(SgButtonText).toBeDefined();
  });
});

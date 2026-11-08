import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// WHY: demo/styles/index.ts only imports CSS. If package.json "sideEffects"
// stops listing it, the demo build tree-shakes every page stylesheet away.
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

describe("package.json sideEffects", () => {
  it("keeps the demo stylesheet entry", () => {
    expect(packageJson.sideEffects).toContain("./demo/styles/index.ts");
  });

  it("keeps the component stylesheets", () => {
    expect(packageJson.sideEffects).toContain("**/*.css");
  });
});

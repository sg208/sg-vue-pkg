import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoUrl = "https://github.com/sg208/sg-vue-pkg";
const pages = ["index", "accessibility", "privacy", "terms"];

// WHY: parsers with scripting on read <noscript> as raw text, so cut it out by hand.
const noscriptLinkOf = (page: string) => {
  const html = readFileSync(resolve("demo", `${page}.html`), "utf8");
  const noscript = html.split("<noscript>")[1]?.split("</noscript>")[0] ?? "";
  const fallback = new DOMParser().parseFromString(noscript, "text/html");
  return fallback.querySelector("a");
};

describe("noscript fallback", () => {
  it.each(pages)("%s.html links to the repository", (page) => {
    expect(noscriptLinkOf(page)?.getAttribute("href")).toBe(repoUrl);
  });
});

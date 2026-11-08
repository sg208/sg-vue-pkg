import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";
import { version } from "../../package.json";

const repoUrl = "https://github.com/sg208/sg-vue-pkg";

const githubChromeLinks = (html: string) =>
  [...new DOMParser().parseFromString(html, "text/html").querySelectorAll("a")]
    .filter((link) => link.href.startsWith("https://github.com/"))
    .filter((link) => !link.href.endsWith("/LICENSE"));

describe("site header version", () => {
  it("shows the package version", () => {
    expect(mount(SiteHeader).text()).toContain(`v${version}`);
  });
});

describe("site chrome GitHub link", () => {
  it("header has no GitHub link", () => {
    expect(githubChromeLinks(mount(SiteHeader).html())).toHaveLength(0);
  });

  it("footer has exactly one GitHub icon link to the repo", () => {
    const links = githubChromeLinks(mount(SiteFooter).html());
    expect(links).toHaveLength(1);
    const [link] = links;
    expect(link?.getAttribute("href")).toBe(repoUrl);
    expect(link?.getAttribute("aria-label")).toBe(
      "Source code on GitHub (opens in a new tab)",
    );
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.getAttribute("rel")).toBe("noopener noreferrer");
    expect(link?.textContent?.trim()).toBe("");
    const icon = link?.querySelector("svg");
    expect(icon?.getAttribute("aria-hidden")).toBe("true");
    expect(icon?.getAttribute("focusable")).toBe("false");
  });
});

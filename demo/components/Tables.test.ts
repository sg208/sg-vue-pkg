import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ApiTable from "./ApiTable.vue";
import TokenTable from "./TokenTable.vue";

// WHY: the narrow-screen layout restyles cells with display:block/grid,
// which makes some browsers drop native table semantics.
const expectExplicitTableRoles = (html: string) => {
  const document = new DOMParser().parseFromString(html, "text/html");
  const count = (selector: string) =>
    document.querySelectorAll(selector).length;

  expect(count("table[role=table]")).toBe(1);
  expect(count("thead[role=rowgroup], tbody[role=rowgroup]")).toBe(2);
  expect(count("tr:not([role=row])")).toBe(0);
  expect(count("th[scope=col]:not([role=columnheader])")).toBe(0);
  expect(count("th[scope=row]:not([role=rowheader])")).toBe(0);
  expect(count("td:not([role=cell])")).toBe(0);
  expect(count("td")).toBeGreaterThan(0);
};

describe("showcase tables", () => {
  it("ApiTable keeps explicit table roles", () => {
    const rows = [
      { name: "text", type: "string", fallback: '""', description: "Label" },
    ];
    const wrapper = mount(ApiTable, { props: { caption: "Props", rows } });

    expectExplicitTableRoles(wrapper.html());
  });

  it("TokenTable keeps explicit table roles", () => {
    const rows = [
      { name: "--sg-gap", light: "1rem", purpose: "Gap", isColour: false },
    ];
    const wrapper = mount(TokenTable, { props: { title: "Spacing", rows } });

    expectExplicitTableRoles(wrapper.html());
  });
});

import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SgButton from "./SgButton.vue";

describe("SgButton", () => {
  it("renders a native button with the default slot", () => {
    const wrapper = mount(SgButton, { slots: { default: "Save" } });

    expect(wrapper.element.tagName).toBe("BUTTON");
    expect(wrapper.text()).toBe("Save");
  });

  it("sets aria-label only when ariaLabel is passed", () => {
    const unlabelled = mount(SgButton);
    const labelled = mount(SgButton, { props: { ariaLabel: "Close dialog" } });

    expect(unlabelled.attributes("aria-label")).toBeUndefined();
    expect(labelled.attributes("aria-label")).toBe("Close dialog");
  });

  it("applies a generated style class", () => {
    const wrapper = mount(SgButton);

    expect(wrapper.classes().length).toBeGreaterThan(0);
  });

  it("emits native click events to the parent", async () => {
    const wrapper = mount(SgButton);

    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});

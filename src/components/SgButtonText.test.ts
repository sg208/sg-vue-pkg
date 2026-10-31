import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SgButtonText from "./SgButtonText.vue";

describe("SgButtonText", () => {
  it("renders the text prop", () => {
    const wrapper = mount(SgButtonText, { props: { text: "Continue" } });

    expect(wrapper.element.tagName).toBe("BUTTON");
    expect(wrapper.text()).toBe("Continue");
  });

  it("renders slot content after the text prop", () => {
    const wrapper = mount(SgButtonText, {
      props: { text: "Next" },
      slots: { default: "<span>→</span>" },
    });

    expect(wrapper.find("span").text()).toBe("→");
    expect(wrapper.text()).toContain("Next");
  });

  it("forwards ariaLabel to aria-label", () => {
    const wrapper = mount(SgButtonText, { props: { ariaLabel: "Open menu" } });

    expect(wrapper.attributes("aria-label")).toBe("Open menu");
  });
});

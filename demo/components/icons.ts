import { h, type FunctionalComponent } from "vue";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.25",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const PlusIcon: FunctionalComponent = () =>
  h("svg", iconProps, [h("path", { d: "M12 5v14M5 12h14" })]);

export const ArrowIcon: FunctionalComponent = () =>
  h("svg", iconProps, [h("path", { d: "M5 12h14M13 6l6 6-6 6" })]);

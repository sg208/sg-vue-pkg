export type TokenRow = {
  name: string;
  light: string;
  dark?: string;
  purpose: string;
  isColour?: boolean;
};

export const sharedTokens: TokenRow[] = [
  {
    name: "--sg-button-font-family",
    light: "inherit",
    purpose: "Typeface; inherits from your app by default.",
  },
  { name: "--sg-button-font-size", light: "0.9375rem", purpose: "Label size." },
  { name: "--sg-button-font-weight", light: "600", purpose: "Label weight." },
  {
    name: "--sg-button-line-height",
    light: "1.25",
    purpose: "Label line height.",
  },
  {
    name: "--sg-button-letter-spacing",
    light: "-0.005em",
    purpose: "Label tracking.",
  },
  {
    name: "--sg-button-min-height",
    light: "2.75rem",
    purpose: "Minimum height and width; 44px keeps touch targets comfortable.",
  },
  {
    name: "--sg-button-padding-block",
    light: "0.625rem",
    purpose: "Top and bottom padding.",
  },
  {
    name: "--sg-button-padding-inline",
    light: "1.125rem",
    purpose: "Left and right padding.",
  },
  {
    name: "--sg-button-gap",
    light: "0.5rem",
    purpose: "Space between a label and an icon.",
  },
  { name: "--sg-button-radius", light: "0.25rem", purpose: "Corner radius." },
  {
    name: "--sg-button-border-width",
    light: "1px",
    purpose: "Border width; borders are transparent unless you colour them.",
  },
  {
    name: "--sg-button-focus-ring",
    light: "#2b2622",
    dark: "#ece5e2",
    purpose: "Keyboard focus outline colour.",
    isColour: true,
  },
  {
    name: "--sg-button-focus-ring-width",
    light: "2px",
    purpose: "Focus outline thickness.",
  },
  {
    name: "--sg-button-focus-ring-offset",
    light: "2px",
    purpose: "Gap between the button and its focus outline.",
  },
  {
    name: "--sg-button-disabled-opacity",
    light: "0.5",
    purpose: "Opacity when disabled or aria-disabled.",
  },
  {
    name: "--sg-button-transition-duration",
    light: "160ms",
    purpose: "Hover and press transition; 0ms under reduced motion.",
  },
  {
    name: "--sg-button-press-offset",
    light: "1px",
    purpose:
      "How far the button moves down when pressed; 0px under reduced motion.",
  },
];

export const primaryTokens: TokenRow[] = [
  {
    name: "--sg-button-bg",
    light: "#a8201a",
    dark: "#ffb4a9",
    purpose: "Fill.",
    isColour: true,
  },
  {
    name: "--sg-button-bg-hover",
    light: "#8f1a15",
    dark: "#ffc9c1",
    purpose: "Fill on hover.",
    isColour: true,
  },
  {
    name: "--sg-button-bg-active",
    light: "#761511",
    dark: "#ff9d8f",
    purpose: "Fill while pressed.",
    isColour: true,
  },
  {
    name: "--sg-button-fg",
    light: "#ffffff",
    dark: "#3b0d08",
    purpose: "Label and icon colour.",
    isColour: true,
  },
  {
    name: "--sg-button-border",
    light: "transparent",
    purpose: "Border colour.",
  },
];

export const secondaryTokens: TokenRow[] = [
  {
    name: "--sg-button-text-bg",
    light: "#e6dfdc",
    dark: "#36302d",
    purpose: "Fill.",
    isColour: true,
  },
  {
    name: "--sg-button-text-bg-hover",
    light: "#dbd2ce",
    dark: "#423b38",
    purpose: "Fill on hover.",
    isColour: true,
  },
  {
    name: "--sg-button-text-bg-active",
    light: "#cfc5c1",
    dark: "#4d4542",
    purpose: "Fill while pressed.",
    isColour: true,
  },
  {
    name: "--sg-button-text-fg",
    light: "#2b2622",
    dark: "#ece5e2",
    purpose: "Label and icon colour.",
    isColour: true,
  },
  {
    name: "--sg-button-text-border",
    light: "transparent",
    purpose: "Border colour.",
  },
];

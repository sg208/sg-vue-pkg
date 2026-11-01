export type FaqItem = { question: string; answer: string; code?: string };

export const faqItems: FaqItem[] = [
  {
    question: 'Why don\'t the buttons set type="button"?',
    answer:
      "They render a native <button>, whose default type is submit. Changing that would break forms that rely on it, so pass the type yourself.",
    code: '<SgButton type="button">Preview</SgButton>',
  },
  {
    question: "How do I label an icon-only button?",
    answer:
      "Pass ariaLabel. It becomes the button's accessible name, so screen readers announce it instead of the icon. Mark the icon itself aria-hidden.",
    code: '<SgButton ariaLabel="Close dialog"><CloseIcon aria-hidden="true" /></SgButton>',
  },
  {
    question: "How do I turn on dark mode?",
    answer:
      'Set data-sg-theme="dark" on any ancestor, or data-sg-theme="auto" to follow the visitor\'s system setting. Already have a dark class? Set the colour tokens under it instead.',
    code: '<html data-sg-theme="auto">',
  },
  {
    question: "How do I disable a button?",
    answer:
      'Use the native disabled attribute. If the button must stay focusable, for example to show a tooltip explaining why, use aria-disabled="true" and ignore clicks in your handler.',
    code: '<SgButtonText disabled text="Archive" />',
  },
  {
    question: "Can I style the buttons with my own classes?",
    answer:
      "Yes. Classes you pass are added to the <button>, and each button carries a stable class, sg-button or sg-button-text. Tokens are the steadier route: they survive future releases.",
  },
  {
    question: "The default look changed. How do I get the old one back?",
    answer:
      "No props, events or slots changed, only the default styling. These overrides bring back the original colours, padding and weight.",
    code: ":root {\n  --sg-button-bg: #cc0000;\n  --sg-button-bg-hover: #cc0000;\n  --sg-button-bg-active: #cc0000;\n  --sg-button-fg: #ffffff;\n  --sg-button-text-bg: #cccccc;\n  --sg-button-text-bg-hover: #cccccc;\n  --sg-button-text-bg-active: #cccccc;\n  --sg-button-text-fg: #000000;\n  --sg-button-padding-block: 1rem;\n  --sg-button-padding-inline: 1rem;\n  --sg-button-font-weight: 700;\n}",
  },
  {
    question: "Do the buttons respect reduced motion?",
    answer:
      "Yes. When the system asks for reduced motion, the hover transition and the press movement are switched off, even if you override the motion tokens.",
  },
];

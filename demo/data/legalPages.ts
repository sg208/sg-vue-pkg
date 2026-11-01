export const legalPages = {
  accessibility: { title: "Accessibility", href: "./accessibility.html" },
  privacy: { title: "Privacy", href: "./privacy.html" },
  terms: { title: "Terms", href: "./terms.html" },
} as const;

export type LegalPageKey = keyof typeof legalPages;

export const isLegalPageKey = (value?: string): value is LegalPageKey =>
  value !== undefined && Object.hasOwn(legalPages, value);

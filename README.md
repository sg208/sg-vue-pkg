# sg208-button

Two accessible buttons for Vue 3: `SgButton` for the main action on a screen and `SgButtonText` for the quieter ones. Each renders one native `<button>`, and every colour, size and duration is a CSS custom property you can override.

Try them in the live showcase: **https://sg-vue-pkg.engg.app**

## Installation

```sh
pnpm add sg208-button
# or: npm i sg208-button
```

## Usage

<!-- prettier-ignore -->
```vue
<script setup>
// import the style once, at the app level
import "sg208-button/style.css";

import { SgButton, SgButtonText } from "sg208-button";
</script>

<template>
  <SgButton type="submit">Save changes</SgButton>
  <SgButton ariaLabel="Close dialog"><CloseIcon aria-hidden="true" /></SgButton>
  <SgButtonText text="Button text with prop" />
  <SgButtonText>This is SgButtonText</SgButtonText>
  <SgButtonText ariaLabel="Open menu"><MenuIcon aria-hidden="true" /></SgButtonText>
</template>
```

## API

| Component      | Prop        | Type     | Default | Description                                                            |
| -------------- | ----------- | -------- | ------- | ---------------------------------------------------------------------- |
| `SgButton`     | `ariaLabel` | `string` | `null`  | Rendered as `aria-label`. Required when the button shows only an icon. |
| `SgButtonText` | `text`      | `string` | `""`    | Label rendered before the default slot.                                |
| `SgButtonText` | `ariaLabel` | `string` | `null`  | Rendered as `aria-label`. Required when the button shows only an icon. |

- **Slot:** `default` for label text, an icon, or both. A direct `<svg>` child is sized to `1.25em`.
- **Events and attributes:** `click` and any other listener or attribute (`type`, `disabled`, `class`, `data-*`) fall through to the `<button>`.
- **`type`:** the buttons keep the native default (`submit`). Pass `type="button"` outside forms or when the button should not submit.
- **Stable classes:** `.sg-button` and `.sg-button-text`, for when you need a selector.

## Accessibility

- Native `<button>` semantics: Enter and Space work, `disabled` removes it from the tab order. Use `aria-disabled="true"` instead when the button must stay focusable; it is styled as disabled, and your click handler should ignore it.
- Default colours meet WCAG 2.2 AA contrast for labels in light and dark.
- A visible focus outline appears for keyboard users (`:focus-visible`).
- Minimum target size of 44px.
- Hover effects only apply on devices that can hover; the transition and press movement switch off under `prefers-reduced-motion: reduce`.

## Theming

Every visual value is a CSS custom property declared with zero specificity, so a plain declaration on `:root`, a wrapper or a single button overrides it.

```css
:root {
  --sg-button-bg: #1f6f43;
  --sg-button-bg-hover: #185a36;
  --sg-button-bg-active: #12472a;
  --sg-button-radius: 999px;
}
```

### Dark mode

Dark values apply under `data-sg-theme="dark"` on any ancestor. Use `data-sg-theme="auto"` to follow the visitor's system setting. Without the attribute, the light values apply. If your app already has a dark-mode selector, set the colour tokens under it instead.

```html
<html data-sg-theme="auto"></html>
```

### SgButton colours

| Token                   | Default (light / dark) | Purpose               |
| ----------------------- | ---------------------- | --------------------- |
| `--sg-button-bg`        | `#a8201a / #ffb4a9`    | Fill                  |
| `--sg-button-bg-hover`  | `#8f1a15 / #ffc9c1`    | Fill on hover         |
| `--sg-button-bg-active` | `#761511 / #ff9d8f`    | Fill while pressed    |
| `--sg-button-fg`        | `#ffffff / #3b0d08`    | Label and icon colour |
| `--sg-button-border`    | `transparent`          | Border colour         |

### SgButtonText colours

| Token                        | Default (light / dark) | Purpose               |
| ---------------------------- | ---------------------- | --------------------- |
| `--sg-button-text-bg`        | `#e6dfdc / #36302d`    | Fill                  |
| `--sg-button-text-bg-hover`  | `#dbd2ce / #423b38`    | Fill on hover         |
| `--sg-button-text-bg-active` | `#cfc5c1 / #4d4542`    | Fill while pressed    |
| `--sg-button-text-fg`        | `#2b2622 / #ece5e2`    | Label and icon colour |
| `--sg-button-text-border`    | `transparent`          | Border colour         |

### Shared shape, type and motion

| Token                             | Default (light / dark) | Purpose                                               |
| --------------------------------- | ---------------------- | ----------------------------------------------------- |
| `--sg-button-font-family`         | `inherit`              | Typeface                                              |
| `--sg-button-font-size`           | `0.9375rem`            | Label size                                            |
| `--sg-button-font-weight`         | `600`                  | Label weight                                          |
| `--sg-button-line-height`         | `1.25`                 | Label line height                                     |
| `--sg-button-letter-spacing`      | `-0.005em`             | Label tracking                                        |
| `--sg-button-min-height`          | `2.75rem`              | Minimum height and width (44px touch target)          |
| `--sg-button-padding-block`       | `0.625rem`             | Top and bottom padding                                |
| `--sg-button-padding-inline`      | `1.125rem`             | Left and right padding                                |
| `--sg-button-gap`                 | `0.5rem`               | Space between label and icon                          |
| `--sg-button-radius`              | `0.25rem`              | Corner radius                                         |
| `--sg-button-border-width`        | `1px`                  | Border width (borders are transparent by default)     |
| `--sg-button-focus-ring`          | `#2b2622 / #ece5e2`    | Keyboard focus outline colour                         |
| `--sg-button-focus-ring-width`    | `2px`                  | Focus outline thickness                               |
| `--sg-button-focus-ring-offset`   | `2px`                  | Gap between button and focus outline                  |
| `--sg-button-disabled-opacity`    | `0.5`                  | Opacity when `disabled` or `aria-disabled="true"`     |
| `--sg-button-transition-duration` | `160ms`                | Hover and press transition (off under reduced motion) |
| `--sg-button-press-offset`        | `1px`                  | Press movement (off under reduced motion)             |

### Restoring the 0.1.0 look

Props, events and slots are unchanged; only the default styling changed. These overrides bring back the original colours, padding and weight:

```css
:root {
  --sg-button-bg: #cc0000;
  --sg-button-bg-hover: #cc0000;
  --sg-button-bg-active: #cc0000;
  --sg-button-fg: #ffffff;
  --sg-button-text-bg: #cccccc;
  --sg-button-text-bg-hover: #cccccc;
  --sg-button-text-bg-active: #cccccc;
  --sg-button-text-fg: #000000;
  --sg-button-padding-block: 1rem;
  --sg-button-padding-inline: 1rem;
  --sg-button-font-weight: 700;
}
```

## Development

You need Node 24 (see `.node-version`) and pnpm (the version is pinned in `package.json` under `packageManager`).

```sh
pnpm install
pnpm dev          # showcase and docs page (demo/) with live reload
pnpm test         # Vitest component tests
pnpm build        # library build to dist/
pnpm build:demo   # static showcase build to dist-demo/
pnpm verify       # format check, lint, typecheck, tests, library and demo builds
```

The library code is in `src/`. The showcase in `demo/` imports straight from `src/`, so it always shows the current code. It also holds the site's accessibility, privacy and terms pages.

### Deploying the showcase

The showcase runs on a Cloudflare Worker that serves `dist-demo/` as static assets; the config is in `wrangler.jsonc`. To deploy, set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` (wrangler 4 is a dev dependency), then run:

```sh
pnpm run deploy   # builds the showcase, then runs wrangler deploy
```

Publishing the package to npm is a separate, manual step.

## License

MIT. See [LICENSE](LICENSE).

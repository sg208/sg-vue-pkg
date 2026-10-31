# design.md

## Architecture

- `src/index.ts:1-4` — single entry; named exports `SgButton`, `SgButtonText`.
- `src/components/SgButton.vue` — `<button>` with default slot and optional `ariaLabel` prop.
- `src/components/SgButtonText.vue` — `<button>` rendering `text` prop plus default slot; optional `ariaLabel`.

## Data flow

1. Consumer imports `sg208-button/style.css` once → component styles load.
2. Consumer imports components from `sg208-button` → ESM (`dist/sg208-button.mjs`) or UMD (`dist/sg208-button.umd.js`).

## Key decisions

- Vue is a peer dependency and external in the bundle. WHY: consumers bring their own Vue 3. SOURCE: `vite.config.mts` `rollupOptions.external`.
- Styles via `vite-css-in-js` `css` tagged template → class names, extracted to `dist/style.css`. WHY: keep styles beside the component without SFC `<style>`. SOURCE: `src/components/SgButton.vue`.
- Type declarations emitted by `vite-plugin-dts`. WHY: TS consumers get prop types. SOURCE: `vite.config.mts`.
- Tests colocated as `src/**/*.test.ts` with Vitest + happy-dom. WHY: same Vite pipeline as the build, so `vite-css-in-js` transforms apply. SOURCE: `vite.config.mts` `test`.

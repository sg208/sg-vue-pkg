# sg208-button

This is a small NPM package for a simple Vue 3 components library with only two components available at this time, `SgButton` and `SgButtonText`.

## Installation

```
pnpm add sg208-button
# or: npm i sg208-button
```

## Use it in Vue3 component

```
<script setup>
// import the style at the app level
import "sg208-button/style.css";

// import sg208-button component(s) here
import { SgButton, SgButtonText } from "sg208-button"
</script>

<template>
    <SgButton>Button Text Here</SgButton>
    <SgButton ariaLabel="Your label here"><SomeIconHere /></SgButton>
    <SgButtonText text="Button text with prop" />
    <SgButtonText>This is SgButtonText</SgButtonText>
    <SgButtonText ariaLabel="Your label here"><SomeIconHere /></SgButtonText>
</template>
```

## Development

Requires Node 24 (`.node-version`) and pnpm (version pinned in `package.json` `packageManager`).

```
pnpm install
pnpm test        # Vitest component tests
pnpm verify      # format check, lint, typecheck, tests, build
pnpm build       # library build to dist/
```

## Thank you

Thank you for visiting and checking out this package, hope it works out for you. I may update this in the near future.

## License

MIT. See [LICENSE](LICENSE).

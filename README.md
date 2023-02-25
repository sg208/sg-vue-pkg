# sg208-button

This is a simple Vue 3 components library with only two components available at this time, `SgButton` and `SgButtonText`.

## Installation

```
npm i sg208-button
```

## Use it in Vue3 component

```
<script setup>
// import the style here or place it somewhere more global if desired
import "sg208-button/dist/style.css";

// import your component(s) here
import { SgButton, SgButtonText } from "sg208-button"
</script>

<template>
    <SgButton>Button Text Here</SgButton>
    <SgButtonText text="Button text with prop" />
    <SgButtonText>This is SgButtonText</SgButtonText>
</template>
```

## Thank you

Thank you for visiting and checking out this package, hope it works out for you. I may update this in the near future.

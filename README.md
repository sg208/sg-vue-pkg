# SG208Button NPM Package

This is a simple a Vue 3 component plugin, nothing really fancy. It inspired by [Publish a Vue Component to NPM // Vite and Vue 3](https://www.youtube.com/watch?v=5QV9wVc8c7g) (YouTube) with updated Vite config based on latest Vite.

## Installation

```
npm i sg208-button
```

## Add the plugin to your Vue 3 project

Add the following to main.js of your project or wherever applied.

```
// Import the plugin + style
import Sg208Button from "sg208-button";
import "sg208-button/dist/style.css";

// Mini mod to allow multiple plugins
const app = createApp(App);
const plugins = [Sg208Button]

plugins.forEach((plugin) => app.use(plugin));

app.mount("#app");
```

## Use it in Vue3 component

```
<template>
    ...existing stuff here...
    <sg208-button>Button Text Here</sg208-button>
</template>
```

## Thank you

Thank you for visiting and checking out this package, hope it works out for you. I may update this in the near future.

<template>
  <button :class="sgButtonTextStyle" :aria-label="ariaLabel">
    {{ text }}
    <slot />
  </button>
</template>

<script setup lang="ts">
import { css } from "vite-css-in-js";

const sgButtonTextStyle = css`
  background-color: #cccccc;
  color: black;
  padding: 1rem;
  border-radius: 0.25rem;
  font-weight: bold;
`;

defineProps({
  text: {
    type: String,
    default: "",
  },
  ariaLabel: {
    type: String,
    default: null,
  },
});
</script>

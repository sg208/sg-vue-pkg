<template>
  <button :class="sgButtonStyle" :aria-label="ariaLabel">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { css } from "vite-css-in-js";

const sgButtonStyle = css`
  background-color: #cc0000;
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  font-weight: bold;
`;

defineProps({
  ariaLabel: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <button
    :class="['sg-button-text', sgButtonTextStyle]"
    :aria-label="ariaLabel"
  >
    {{ text }}
    <slot />
  </button>
</template>

<script setup lang="ts">
import { css } from "vite-css-in-js";

// Shares its structure with SgButton; only the colour tokens differ.
const sgButtonTextStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sg-button-gap);
  box-sizing: border-box;
  min-height: var(--sg-button-min-height);
  min-width: var(--sg-button-min-height);
  margin: 0;
  padding: var(--sg-button-padding-block) var(--sg-button-padding-inline);
  border: var(--sg-button-border-width) solid var(--sg-button-text-border);
  border-radius: var(--sg-button-radius);
  background-color: var(--sg-button-text-bg);
  color: var(--sg-button-text-fg);
  font-family: var(--sg-button-font-family);
  font-size: var(--sg-button-font-size);
  font-weight: var(--sg-button-font-weight);
  line-height: var(--sg-button-line-height);
  letter-spacing: var(--sg-button-letter-spacing);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition:
    background-color var(--sg-button-transition-duration) ease-out,
    transform var(--sg-button-transition-duration) ease-out;

  @media (hover: hover) {
    &:hover {
      background-color: var(--sg-button-text-bg-hover);
    }
  }

  &:active {
    background-color: var(--sg-button-text-bg-active);
    transform: translateY(var(--sg-button-press-offset));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active {
      transform: none;
    }
  }

  &:focus-visible {
    outline: var(--sg-button-focus-ring-width) solid var(--sg-button-focus-ring);
    outline-offset: var(--sg-button-focus-ring-offset);
  }

  &:disabled,
  &[aria-disabled="true"] {
    background-color: var(--sg-button-text-bg);
    cursor: not-allowed;
    opacity: var(--sg-button-disabled-opacity);
    transform: none;
  }

  & > svg {
    flex-shrink: 0;
    width: 1.25em;
    height: 1.25em;
  }
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

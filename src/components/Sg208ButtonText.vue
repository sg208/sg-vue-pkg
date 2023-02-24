<template>
  <button class="sg208-button">
    {{ text }}
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<style scoped>
.sg208-button-2 {
  background-color: #cccccc;
  color: black;
  padding: 1rem;
  border-radius: 0.25rem;
  font-weight: bold;
}
</style>

<template>
  <fieldset class="theme-switch">
    <legend class="visually-hidden">Colour theme</legend>
    <label
      v-for="option in options"
      :key="option.value"
      class="theme-switch__option"
    >
      <input
        type="radio"
        name="theme"
        :value="option.value"
        :checked="themeChoice === option.value"
        @change="handleChange(option.value)"
      />
      <span>{{ option.label }}</span>
    </label>
  </fieldset>
</template>

<script setup lang="ts">
import { useTheme, type ThemeChoice } from "../composables/useTheme";

const { themeChoice, setTheme } = useTheme();

const options: { value: ThemeChoice; label: string }[] = [
  { value: "system", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const handleChange = (choice: ThemeChoice) => setTheme(choice);
</script>

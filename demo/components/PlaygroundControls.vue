<template>
  <div class="controls">
    <fieldset class="choice">
      <legend class="choice__legend">Fill</legend>
      <div class="choice__options">
        <label
          v-for="accent in accents"
          :key="accent.id"
          class="choice__option"
        >
          <input
            type="radio"
            name="accent"
            :value="accent.id"
            :checked="accentId === accent.id"
            @change="handleAccent(accent.id)"
          />
          <span
            class="choice__swatch"
            :style="{
              '--swatch': accent.light.bg,
              '--swatch-dark': accent.dark.bg,
            }"
            aria-hidden="true"
          />
          <span>{{ accent.name }}</span>
        </label>
      </div>
    </fieldset>

    <fieldset class="choice">
      <legend class="choice__legend">Corners</legend>
      <div class="choice__options">
        <label
          v-for="corner in corners"
          :key="corner.id"
          class="choice__option"
        >
          <input
            type="radio"
            name="corner"
            :value="corner.id"
            :checked="cornerId === corner.id"
            @change="handleCorner(corner.id)"
          />
          <span
            class="choice__corner"
            :style="{ '--corner': corner.value }"
            aria-hidden="true"
          />
          <span>{{ corner.name }}</span>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { accents, corners } from "../data/accents";

defineProps<{ accentId: string; cornerId: string }>();

const emit = defineEmits<{
  "update:accentId": [value: string];
  "update:cornerId": [value: string];
}>();

const handleAccent = (id: string) => emit("update:accentId", id);
const handleCorner = (id: string) => emit("update:cornerId", id);
</script>

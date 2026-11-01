<template>
  <section
    id="playground"
    class="section playground"
    aria-labelledby="playground-title"
  >
    <div class="wrap">
      <h2 id="playground-title" class="section-title">Try your own label</h2>

      <div class="label-field">
        <label for="label-input" class="label-field__label">Button label</label>
        <input
          id="label-input"
          v-model="label"
          class="label-field__input"
          type="text"
          maxlength="40"
          autocomplete="off"
          spellcheck="false"
        />
      </div>

      <div class="examples" role="group" aria-label="Example labels">
        <SgButtonText
          v-for="example in examples"
          :key="example"
          :text="example"
          @click="handleExample(example)"
        />
      </div>

      <div class="playground__grid">
        <div class="stage" :style="stageStyle">
          <SgButton>{{ shownLabel }}</SgButton>
          <SgButtonText :text="shownLabel" />
          <SgButton :aria-label="shownLabel"><PlusIcon /></SgButton>
          <SgButton disabled>{{ shownLabel }}</SgButton>
        </div>

        <PlaygroundControls
          v-model:accent-id="accentId"
          v-model:corner-id="cornerId"
        />
      </div>

      <div class="snippet">
        <div class="snippet__head">
          <h3 id="snippet-title">Your overrides</h3>
          <SgButtonText text="Copy CSS" @click="handleCopy" />
        </div>
        <pre
          role="region"
          aria-labelledby="snippet-title"
          tabindex="0"
        ><code>{{ snippet }}</code></pre>
        <p class="snippet__status" role="status">{{ copyStatus }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { SgButton, SgButtonText } from "../../src";
import PlaygroundControls from "./PlaygroundControls.vue";
import { PlusIcon } from "./icons";
import { accents, corners } from "../data/accents";
import { useTheme } from "../composables/useTheme";
import { useCopy } from "../composables/useCopy";

const examples = ["Publish", "Add to basket", "Book a table", "Delete project"];

const label = ref("Save changes");
const accentId = ref("crimson");
const cornerId = ref("soft");
const { isDark } = useTheme();
const { copyStatus, copyText } = useCopy();

const shownLabel = computed(() => label.value.trim() || "Button");
const accent = computed(
  () => accents.find((item) => item.id === accentId.value) ?? accents[0],
);
const corner = computed(
  () => corners.find((item) => item.id === cornerId.value) ?? corners[1],
);
const shade = computed(() =>
  isDark.value ? accent.value.dark : accent.value.light,
);

const stageStyle = computed(() => ({
  "--sg-button-bg": shade.value.bg,
  "--sg-button-bg-hover": shade.value.hover,
  "--sg-button-bg-active": shade.value.active,
  "--sg-button-fg": shade.value.fg,
  "--sg-button-radius": corner.value.value,
}));

const snippet = computed(() => {
  const selector = isDark.value ? '[data-sg-theme="dark"]' : ":root";
  const lines = Object.entries(stageStyle.value).map(
    ([name, value]) => `  ${name}: ${value};`,
  );
  return `${selector} {\n${lines.join("\n")}\n}`;
});

const handleExample = (example: string) => {
  label.value = example;
};

const handleCopy = async () => {
  await copyText(snippet.value, "CSS");
};
</script>

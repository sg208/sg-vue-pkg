<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero__grid">
      <div class="hero__copy">
        <h1 id="hero-title">Two Vue buttons, done properly.</h1>
        <p class="hero__lede">
          <strong>sg208-button</strong> gives Vue 3 apps a primary
          <code>SgButton</code> and a quieter <code>SgButtonText</code>. Native
          elements, keyboard ready, and themed entirely with CSS custom
          properties.
        </p>
        <div class="install">
          <code class="install__command">{{ installCommand }}</code>
          <SgButton aria-label="Copy install command" @click="handleCopy">
            Copy
          </SgButton>
        </div>
        <p class="hero__status" role="status">{{ copyStatus }}</p>
        <p class="hero__links">
          <a href="#playground">Try the playground</a>
          <a href="#tokens">Browse the tokens</a>
        </p>
      </div>

      <figure class="hero__demo">
        <div class="confirm" data-ui>
          <p class="confirm__title">Discard this draft?</p>
          <p class="confirm__body">
            Your changes to “Spring menu” have not been saved. Discarding them
            cannot be undone.
          </p>
          <div class="confirm__actions">
            <SgButtonText
              text="Keep editing"
              @click="handleChoice('Keep editing')"
            />
            <SgButton @click="handleChoice('Discard draft')">
              Discard draft
            </SgButton>
          </div>
          <p class="confirm__status" role="status">
            {{ lastChoice ? `You pressed “${lastChoice}”.` : "" }}
          </p>
        </div>
        <figcaption class="muted">
          A confirm step: <code>SgButtonText</code> for the safe choice,
          <code>SgButton</code> for the main one. Both are live.
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SgButton, SgButtonText } from "../../src";
import { useCopy } from "../composables/useCopy";

const installCommand = "pnpm add sg208-button";
const lastChoice = ref("");
const { copyStatus, copyText } = useCopy();

const handleCopy = async () => {
  await copyText(installCommand, "Install command");
};

const handleChoice = (choice: string) => {
  lastChoice.value = choice;
};
</script>

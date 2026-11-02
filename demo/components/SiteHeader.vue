<template>
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="wordmark" :href="homeHref || '#main'">
        sg208-button
        <span class="wordmark__version">v{{ version }}</span>
      </a>
      <nav class="site-nav" aria-label="Sections">
        <ul>
          <li><a :href="`${homeHref}#playground`">Playground</a></li>
          <li><a :href="`${homeHref}#components`">Components</a></li>
          <li><a :href="`${homeHref}#tokens`">Tokens</a></li>
          <li><a :href="`${homeHref}#questions`">Questions</a></li>
        </ul>
      </nav>
      <ThemeSwitch />
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitch from "./ThemeSwitch.vue";
import packageJson from "../../package.json";

// Empty on the home page; "./" on other pages so section links go home.
const { homeHref = "" } = defineProps<{ homeHref?: string }>();

const version = packageJson.version;
</script>

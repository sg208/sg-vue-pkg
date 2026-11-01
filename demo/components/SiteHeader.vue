<template>
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="wordmark" href="#main">
        sg208-button
        <span class="wordmark__version">v{{ version }}</span>
      </a>
      <nav class="site-nav" aria-label="Sections">
        <ul>
          <li><a href="#playground">Playground</a></li>
          <li><a href="#components">Components</a></li>
          <li><a href="#tokens">Tokens</a></li>
          <li><a href="#questions">Questions</a></li>
          <li>
            <a href="https://github.com/sg208/sg-vue-pkg" rel="noopener"
              >GitHub</a
            >
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitch from "./ThemeSwitch.vue";
import packageJson from "../../package.json";

const version = packageJson.version;
</script>

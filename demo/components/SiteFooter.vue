<template>
  <footer class="site-footer" aria-labelledby="footer-title">
    <div class="wrap footer-board">
      <div class="footer-tile footer-tile--statement">
        <h2 id="footer-title" class="footer-tile__lead">
          Two buttons, kept small and kept honest.
        </h2>
        <p class="footer-tile__small">
          MIT licence. Made by
          <a href="https://github.com/sg208" rel="noopener"
            >Syailendra Ginting</a
          >.
        </p>
      </div>
      <nav class="footer-tile footer-tile--nav" aria-label="Footer links">
        <ul>
          <li>
            <a href="https://github.com/sg208/sg-vue-pkg" rel="noopener"
              >Source on GitHub</a
            >
          </li>
          <li>
            <a href="https://www.npmjs.com/package/sg208-button" rel="noopener"
              >Package on npm</a
            >
          </li>
          <li>
            <a
              href="https://github.com/sg208/sg-vue-pkg/blob/develop/LICENSE"
              rel="noopener"
              >Licence</a
            >
          </li>
          <li v-for="page in legalPages" :key="page.href">
            <a :href="page.href">{{ page.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="footer-tile footer-tile--install">
        <p class="footer-tile__small">Install</p>
        <code>pnpm add sg208-button</code>
      </div>
      <p class="footer-tile footer-tile--wordmark" aria-hidden="true">
        sg208-button
      </p>
      <a
        class="footer-tile footer-tile--accent"
        :href="`${homeHref}#playground`"
      >
        <span>Back to the playground</span>
        <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
          <path
            d="M10 38 38 10M16 10h22v22"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { legalPages } from "../data/legalPages";

// Empty on the home page; "./" on other pages so the playground link goes home.
const { homeHref = "" } = defineProps<{ homeHref?: string }>();
</script>

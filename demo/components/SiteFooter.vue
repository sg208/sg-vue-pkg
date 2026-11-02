<template>
  <footer class="site-footer" aria-labelledby="footer-title">
    <div class="wrap footer-board">
      <div class="footer-tile footer-tile--statement">
        <h2 id="footer-title" class="footer-tile__lead">
          Two buttons, kept small and kept honest.
        </h2>
        <div class="footer-tile__meta">
          <p class="footer-tile__small">
            MIT licence. Made by Syailendra Ginting.
          </p>
          <a
            class="footer-source"
            href="https://github.com/sg208/sg-vue-pkg"
            aria-label="Source code on GitHub (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <nav class="footer-tile footer-tile--nav" aria-label="Footer links">
        <ul>
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

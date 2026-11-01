<template>
  <section class="section intro" aria-labelledby="intro-title">
    <div class="wrap">
      <h2 id="intro-title" class="section-title">What you get</h2>
      <p class="intro__lead">
        Two components that do one job each. The primary button carries the
        action a screen exists for; the text button carries everything else.
        Both stay out of your way: no wrappers, no runtime styles, no
        dependencies beyond Vue.
      </p>
      <div class="intro__columns">
        <p v-for="point in points" :key="point.title">
          <strong>{{ point.title }}</strong> {{ point.body }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  {
    title: "A real <button>.",
    body: "Each component renders a single native button, so forms, Enter and Space, disabled and every other attribute behave the way the browser intends. Click events and attributes you pass land on the element itself.",
  },
  {
    title: "Accessible by default.",
    body: "Labels meet WCAG AA contrast in light and dark, focus shows a clear outline only for keyboard users, targets are at least 44px tall, and ariaLabel names icon-only buttons.",
  },
  {
    title: "Themed with tokens.",
    body: "Every colour, size and duration is a CSS custom property. Override one on :root, on a wrapper or on a single button; no build step, no theme provider.",
  },
  {
    title: "Small on purpose.",
    body: "About one kilobyte of JavaScript and five of CSS, gzipped smaller still. Vue is a peer dependency, styles ship as one file, and types come with the package.",
  },
];
</script>

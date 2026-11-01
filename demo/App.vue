<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <HeroSection />
    <IntroSection />
    <PlaygroundSection />
    <ComponentsSection />
    <TokensSection />
    <FaqSection />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import IntroSection from "./components/IntroSection.vue";
import PlaygroundSection from "./components/PlaygroundSection.vue";
import ComponentsSection from "./components/ComponentsSection.vue";
import TokensSection from "./components/TokensSection.vue";
import FaqSection from "./components/FaqSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

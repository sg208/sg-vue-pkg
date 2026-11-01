<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader home-href="./" />
  <main id="main" class="section legal" tabindex="-1">
    <article class="wrap legal__body" aria-labelledby="legal-title">
      <h1 id="legal-title" class="legal__title">
        {{ legalPages[pageKey].title }}
      </h1>
      <component :is="contentByPage[pageKey]" />
    </article>
  </main>
  <SiteFooter home-href="./" />
</template>

<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import AccessibilityContent from "./components/legal/AccessibilityContent.vue";
import PrivacyContent from "./components/legal/PrivacyContent.vue";
import TermsContent from "./components/legal/TermsContent.vue";
import { legalPages, type LegalPageKey } from "./data/legalPages";

defineProps<{ pageKey: LegalPageKey }>();

const contentByPage = {
  accessibility: AccessibilityContent,
  privacy: PrivacyContent,
  terms: TermsContent,
};
</script>

<template>
  <section id="questions" class="section faq" aria-labelledby="faq-title">
    <div class="wrap faq__grid">
      <h2 id="faq-title" class="section-title faq__title">Questions</h2>
      <div class="faq__list">
        <details
          v-for="(item, index) in faqItems"
          :key="item.question"
          class="faq__item"
          name="faq"
          :open="index === 0"
        >
          <summary class="faq__question">
            <span>{{ item.question }}</span>
            <span class="faq__sign" aria-hidden="true" />
          </summary>
          <div class="faq__answer">
            <p>{{ item.answer }}</p>
            <pre v-if="item.code"><code>{{ item.code }}</code></pre>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqItems } from "../data/faq";
</script>

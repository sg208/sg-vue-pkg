<template>
  <section id="tokens" class="section tokens" aria-labelledby="tokens-title">
    <div class="wrap">
      <div class="tokens__head">
        <h2 id="tokens-title" class="section-title">Theme tokens</h2>
        <p class="section-lead">
          Every value the buttons draw with. Set any of them on
          <code>:root</code>, on a wrapper, or on one button. Dark values apply
          under <code>data-sg-theme="dark"</code>, or <code>"auto"</code> to
          follow the system.
        </p>
      </div>
      <div class="tokens__groups">
        <TokenTable
          v-for="group in groups"
          :key="group.title"
          :title="group.title"
          :rows="group.rows"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TokenTable from "./TokenTable.vue";
import { primaryTokens, secondaryTokens, sharedTokens } from "../data/tokens";

const groups = [
  { title: "SgButton colours", rows: primaryTokens },
  { title: "SgButtonText colours", rows: secondaryTokens },
  { title: "Shared shape, type and motion", rows: sharedTokens },
];
</script>

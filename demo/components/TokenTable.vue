<template>
  <div class="token-group">
    <h3 :id="headingId">{{ title }}</h3>
    <div
      class="table-scroll"
      role="region"
      :aria-labelledby="headingId"
      tabindex="0"
    >
      <table class="token-table">
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Default</th>
            <th scope="col">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.name">
            <th scope="row">
              <code>{{ row.name }}</code>
            </th>
            <td class="token-table__value">
              <span class="token-value">
                <span
                  v-if="row.isColour"
                  class="token-value__swatch"
                  :style="{ background: row.light }"
                  aria-hidden="true"
                />
                <code>{{ row.light }}</code>
              </span>
              <span v-if="row.dark" class="token-value">
                <span
                  v-if="row.isColour"
                  class="token-value__swatch"
                  :style="{ background: row.dark }"
                  aria-hidden="true"
                />
                <code>{{ row.dark }}</code>
                <span class="muted">dark</span>
              </span>
            </td>
            <td>{{ row.purpose }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TokenRow } from "../data/tokens";

const props = defineProps<{ title: string; rows: TokenRow[] }>();

const headingId = computed(
  () => `tokens-${props.title.toLowerCase().replace(/[^a-z]+/g, "-")}`,
);
</script>

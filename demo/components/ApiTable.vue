<template>
  <div class="table-scroll" role="region" :aria-label="caption" tabindex="0">
    <table class="api-table" role="table">
      <caption class="visually-hidden">
        {{
          caption
        }}
      </caption>
      <thead role="rowgroup">
        <tr role="row">
          <th scope="col" role="columnheader">Name</th>
          <th scope="col" role="columnheader">Type</th>
          <th scope="col" role="columnheader">Default</th>
          <th scope="col" role="columnheader">Description</th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr v-for="row in rows" :key="row.name" role="row">
          <th scope="row" role="rowheader">
            <code>{{ row.name }}</code>
          </th>
          <td role="cell">{{ row.type }}</td>
          <td role="cell">
            <code>{{ row.fallback }}</code>
          </td>
          <td role="cell">{{ row.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { ApiRow } from "../data/api";

defineProps<{ caption: string; rows: ApiRow[] }>();
</script>

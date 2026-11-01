<template>
  <div class="table-scroll" role="region" :aria-label="caption" tabindex="0">
    <table class="api-table">
      <caption class="visually-hidden">
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Default</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <th scope="row">
            <code>{{ row.name }}</code>
          </th>
          <td>{{ row.type }}</td>
          <td>
            <code>{{ row.fallback }}</code>
          </td>
          <td>{{ row.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { ApiRow } from "../data/api";

defineProps<{ caption: string; rows: ApiRow[] }>();
</script>

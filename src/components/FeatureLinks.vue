<template>
  <div class="row g-4">
    <div v-for="feature in entries" :key="feature.slug" class="col-md-6 col-lg-4">
      <div class="feature-card text-start">
        <h3 class="h4"><router-link :to="'/' + feature.slug">{{ feature.title }}</router-link></h3>
        <p class="mb-0">{{ feature.summary }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { features } from '../content/features.mjs'
defineProps({ entries: { type: Array, default: () => features } })
</script>

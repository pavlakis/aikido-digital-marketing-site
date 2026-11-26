<template>
  <figure v-if="image" class="my-4">
    <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" :loading="hero ? 'eager' : 'lazy'" class="img-fluid rounded-3" />
    <figcaption v-if="image.caption" class="text-muted mt-2">{{ image.caption }}</figcaption>
  </figure>
</template>
<script setup>
defineProps({ image: { type: Object, default: null }, hero: Boolean })
</script>

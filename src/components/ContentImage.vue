<template>
  <figure v-if="image" class="my-4">
    <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" :loading="hero ? 'eager' : 'lazy'" class="img-fluid rounded-3" />
    <figcaption v-if="image.caption || (hero && image.fullSize)" class="text-muted mt-2">
      {{ image.caption }}
      <a v-if="hero && image.fullSize" :href="image.fullSize">View full-size screenshot</a>
    </figcaption>
  </figure>
</template>
<script setup>
defineProps({ image: { type: Object, default: null }, hero: Boolean })
</script>

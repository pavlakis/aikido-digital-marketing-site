<template>
  <div>
    <article class="container py-5"><div class="marketing-copy mx-auto">
      <p>{{ story.name }}</p><h1 class="display-5 fw-bold">{{ story.title }}</h1><p class="lead">{{ story.introduction }}</p>
      <ContentImage :image="story.image" hero />
      <section v-for="section in sections" :key="section.key" class="my-5"><h2 class="h3">{{ section.title }}</h2><p>{{ story[section.key] }}</p></section>
      <figure v-if="story.testimonial"><blockquote>{{ story.testimonial.quote }}</blockquote><figcaption v-if="story.testimonial.attribution">{{ story.testimonial.attribution }}</figcaption></figure>
      <router-link to="/features">Explore the product capabilities</router-link>
    </div></article>
  </div>
</template>
<script setup>
import ContentImage from '../components/ContentImage.vue'
defineProps({ story: { type: Object, required: true } })
const sections = [{ key: 'background', title: 'Organisation background' }, { key: 'previousProcess', title: 'The previous process' }, { key: 'usage', title: 'How AikidoDigital is used' }, { key: 'outcome', title: 'The outcome' }]
</script>

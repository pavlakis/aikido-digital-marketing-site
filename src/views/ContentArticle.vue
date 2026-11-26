<template>
  <div>
    <article class="container py-5">
      <div class="marketing-copy mx-auto">
        <nav aria-label="Breadcrumb" class="mb-4"><router-link to="/">Home</router-link> / <router-link :to="base">{{ sectionTitle }}</router-link></nav>
        <p class="text-muted">{{ entry.category }} · <span v-if="entry.status === 'draft'">Example date: </span><time :datetime="entry.date">{{ formatDate(entry.date) }}</time></p>
        <h1 class="display-5 fw-bold">{{ entry.title }}</h1>
        <p class="lead my-4">{{ entry.summary }}</p>
        <p v-if="entry.status === 'draft'" class="editorial-note">Draft example — copy, date and availability require review before publication. This is not a release announcement or final guidance.</p>
        <ContentImage :image="entry.image" hero />
        <section v-for="section in entry.sections" :key="section.title" class="my-5"><h2 class="h3">{{ section.title }}</h2><p>{{ section.text }}</p></section>
        <aside v-if="feature" class="p-4 bg-light rounded-3"><h2 class="h4">Explore {{ feature.title }}</h2><p>{{ feature.summary }}</p><router-link :to="'/' + feature.slug">Learn about {{ feature.title }}</router-link></aside>
        <p class="mt-4"><router-link to="/security-data-protection">Security &amp; Data Protection</router-link></p>
        <div v-if="related.length" class="mt-5"><h2 class="h4">Related reading</h2><ul><li v-for="item in related" :key="item.slug"><router-link :to="relatedBase + '/' + item.slug">{{ item.title }}</router-link><span v-if="item.status === 'draft'"> — draft example</span></li></ul></div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import ContentImage from '../components/ContentImage.vue'
import { features } from '../content/features.mjs'
import { publishedUpdates, resources, visibleArticles, formatDate } from '../content/articles.mjs'
const props = defineProps({ entry: { type: Object, required: true }, base: { type: String, required: true }, sectionTitle: { type: String, required: true } })
const feature = computed(() => features.find(f => f.slug === props.entry.feature))
const relatedBase = computed(() => props.base === '/whats-new' ? '/resources' : '/whats-new')
const related = computed(() => visibleArticles(props.base === '/whats-new' ? resources : publishedUpdates()).filter(a => a.feature === props.entry.feature).slice(0, 3))
</script>

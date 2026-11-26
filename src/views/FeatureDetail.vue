<template>
  <div>
    <section class="features-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="mb-4"><router-link to="/features">Features</router-link> / {{ feature.title }}</nav>
        <div class="marketing-copy">
          <h1 class="display-5 fw-bold">{{ feature.heading }}</h1>
          <p class="lead my-4">{{ feature.summary }}</p>
          <p v-if="feature.availability" class="editorial-note mt-4">{{ feature.availability }}</p>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <h2 class="h3">{{ feature.slug === 'digital-membership-cards' ? 'Plan a practical alternative to printed cards' : 'A clearer way to manage the work' }}</h2>
        <p class="marketing-copy mb-5">{{ feature.problem }}</p>
        <div class="row g-4">
          <div v-for="section in feature.sections" :key="section.title" class="col-md-4">
            <div class="feature-card text-start"><h3 class="h4">{{ section.title }}</h3><p>{{ section.text }}</p></div>
          </div>
        </div>
        <div v-if="feature.visuals" class="mt-5">
          <h2 class="h3">Card examples for review</h2>
          <p>Screenshot spaces are reserved below. These are placeholders, not product screenshots or confirmation of wallet availability.</p>
          <div class="row g-4">
            <div v-for="visual in feature.visuals" :key="visual" class="col-md-4">
              <figure class="screenshot-placeholder"><div><h3 class="h5">{{ visual }}</h3><p class="mb-0">Approved screenshot to be added</p></div></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="features-section">
      <div class="container">
        <h2 class="h3 mb-4">Related capabilities</h2>
        <FeatureLinks :entries="related" />
        <div v-if="updates.length || guides.length" class="row g-4 mt-4">
          <div v-if="updates.length" class="col-md-6"><h2 class="h4">What’s New</h2><ul><li v-for="entry in updates" :key="entry.slug"><router-link :to="'/whats-new/' + entry.slug">{{ entry.title }}</router-link><span v-if="entry.status === 'draft'"> — draft example</span></li></ul></div>
          <div v-if="guides.length" class="col-md-6"><h2 class="h4">Resources for your team</h2><ul><li v-for="entry in guides" :key="entry.slug"><router-link :to="'/resources/' + entry.slug">{{ entry.title }}</router-link><span v-if="entry.status === 'draft'"> — draft guide</span></li></ul></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { features } from '../content/features.mjs'
import { publishedUpdates, resources, visibleArticles } from '../content/articles.mjs'
import FeatureLinks from '../components/FeatureLinks.vue'
const props = defineProps({ feature: { type: Object, required: true } })
const related = computed(() => features.filter(f => props.feature.related.includes(f.slug)))
const updates = computed(() => publishedUpdates().filter(a => a.feature === props.feature.slug))
const guides = computed(() => visibleArticles(resources).filter(a => a.feature === props.feature.slug))
</script>

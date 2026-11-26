<template>
  <div>
    <section class="features-section">
      <div class="container">
        <h1 class="display-4 fw-bold">{{ title }}</h1>
        <p class="lead marketing-copy">{{ description }}</p>
        <p v-if="entries.some(a => a.status === 'draft')" class="editorial-note">Draft examples are shown to preview this section. Their dates are illustrative, and they are not release announcements or finished guidance.</p>
        <div v-if="!entries.length" class="mt-5">
          <h2 class="h4">No published updates yet</h2>
          <p>Product announcements will appear here when they are ready.</p>
          <router-link to="/features">Explore current product features</router-link>
        </div>
        <div v-else class="row g-4 mt-3">
          <div v-for="entry in entries" :key="entry.slug" class="col-md-6 col-lg-4">
            <article class="feature-card text-start">
              <ContentImage :image="entry.image" />
              <p class="small text-muted">{{ entry.category }} · <span v-if="entry.status === 'draft'">Example date: </span><time :datetime="entry.date">{{ formatDate(entry.date) }}</time></p>
              <p v-if="entry.status === 'draft'" class="draft-label">Draft example</p>
              <h2 class="h4"><router-link :to="base + '/' + entry.slug">{{ entry.title }}</router-link></h2>
              <p>{{ entry.summary }}</p>
            </article>
          </div>
        </div>
        <p class="mt-5"><router-link :to="base === '/whats-new' ? '/resources' : '/whats-new'">{{ base === '/whats-new' ? 'Explore educational resources' : 'Read product updates in What’s New' }}</router-link></p>
      </div>
    </section>
  </div>
</template>
<script setup>
import ContentImage from '../components/ContentImage.vue'
import { formatDate } from '../content/articles.mjs'
defineProps({ title: { type: String, required: true }, description: { type: String, required: true }, base: { type: String, required: true }, entries: { type: Array, required: true } })
</script>

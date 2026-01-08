<template>
  <div style="padding-top: 100px;">
    <section class="pricing-section" role="region" aria-labelledby="pricing-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h1 id="pricing-heading" class="display-4 fw-bold text-dark mb-3">Choose Your Plan</h1>
          <p class="lead text-muted mb-4">Flexible pricing options that grow with your martial arts school</p>

          <div class="pricing-toggle" role="group" aria-label="Pricing period toggle">
            <button
              class="toggle-btn"
              :class="{ active: !isAnnual }"
              @click="!isAnnual || togglePricing()"
              type="button"
              :aria-pressed="!isAnnual">
              Monthly
            </button>
            <button
              class="toggle-btn"
              :class="{ active: isAnnual }"
              @click="isAnnual || togglePricing()"
              type="button"
              :aria-pressed="isAnnual">
              Annual <span class="badge bg-success ms-1" v-if="isAnnual">Save 20%</span>
            </button>
          </div>
        </div>

        <div class="row justify-content-center g-4">
          <div class="col-lg-5 col-md-6">
            <div class="pricing-card">
              <h3 class="fw-bold mb-3">Dojo Management</h3>
              <div class="price">${{ dojoPrice }}</div>
              <div class="price-period">{{ period }}</div>
              <p class="text-muted mt-3">Perfect for individual dojos and small martial arts schools</p>

              <ul class="feature-list">
                <li><i class="fas fa-check" aria-hidden="true"></i>Up to 200 students</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Class scheduling & booking</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Student progress tracking</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Automated billing</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Basic reporting</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Mobile app access</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Email support</li>
              </ul>

              <button class="btn btn-primary w-100" type="button">Choose Dojo Plan</button>
            </div>
          </div>

          <div class="col-lg-5 col-md-6">
            <div class="pricing-card featured">
              <h3 class="fw-bold mb-3">Organization & Affiliations</h3>
              <div class="price">${{ orgPrice }}</div>
              <div class="price-period">{{ period }}</div>
              <p class="text-muted mt-3">Ideal for martial arts organizations and multi-location schools</p>

              <ul class="feature-list">
                <li><i class="fas fa-check" aria-hidden="true"></i>Unlimited students</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Multiple location management</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Advanced scheduling</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Comprehensive analytics</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Tournament management</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Instructor certification tracking</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>API access</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Priority phone support</li>
              </ul>

              <button class="btn btn-primary w-100" type="button">Choose Organization Plan</button>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="lead text-muted">All plans include a 14-day free trial. No credit card required.</p>
          <p class="text-muted">Need a custom solution? <a href="#" class="text-decoration-none" style="color: var(--primary-orange);">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'PricingView',
  setup() {
    const isAnnual = ref(false)
    const togglePricing = () => { isAnnual.value = !isAnnual.value }
    const dojoPrice = computed(() => isAnnual.value ? 49 : 59)
    const orgPrice = computed(() => isAnnual.value ? 149 : 179)
    const period = computed(() => isAnnual.value ? '/year' : '/month')
    return { isAnnual, togglePricing, dojoPrice, orgPrice, period }
  }
}
</script>

<style scoped>

</style>


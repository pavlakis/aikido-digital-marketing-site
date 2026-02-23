<template>
  <div style="padding-top: 100px;">
    <section class="pricing-section" role="region" aria-labelledby="pricing-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h1 id="pricing-heading" class="display-4 fw-bold text-dark mb-3">Membership Pricing</h1>
          <p class="lead text-muted mb-4">Simple pricing for aikido organisations of all sizes</p>

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
              <h3 class="fw-bold mb-3">Dojo Plan</h3>
              <div class="price">${{ dojoPrice }}</div>
              <div class="price-period">{{ period }}</div>
              <p class="text-muted mt-3">Perfect for individual dojos</p>

              <ul class="feature-list">
                <li><i class="fas fa-check" aria-hidden="true"></i>Up to 100 members</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Member records management</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Grade tracking</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Digital membership cards</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Basic reporting</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Email support</li>
              </ul>

              <button class="btn btn-primary w-100" type="button">Request Access</button>
            </div>
          </div>

          <div class="col-lg-5 col-md-6">
            <div class="pricing-card featured">
              <h3 class="fw-bold mb-3">Organisation Plan</h3>
              <div class="price">${{ orgPrice }}</div>
              <div class="price-period">{{ period }}</div>
              <p class="text-muted mt-3">For associations and national organisations</p>

              <ul class="feature-list">
                <li><i class="fas fa-check" aria-hidden="true"></i>Unlimited members</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Multiple dojo management</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Hierarchical organisation structure</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Advanced reporting & analytics</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Grade certification tracking</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Membership renewals</li>
                <li><i class="fas fa-check" aria-hidden="true"></i>Priority support</li>
              </ul>

              <button class="btn btn-primary w-100" type="button">Request Access</button>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="lead text-muted">Available by invite only.</p>
          <p class="text-muted">Interested in joining? <a href="#" class="text-decoration-none" style="color: var(--primary-orange);">Contact us</a></p>
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


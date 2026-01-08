<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="display-4 fw-bold mb-4">Go Digital with your Aikido Management</h1>
              <p class="lead mb-4">Streamline your dojo operations, manage memberships, track progress, and grow your aikido community with AikidoDigital - the complete management platform for aikido dojos and associations.</p>
              <div class="d-flex flex-wrap gap-3">
                <router-link to="/pricing" class="btn btn-primary btn-lg" role="button">Start Free Trial</router-link>
                <button class="btn btn-outline-primary btn-lg" @click="watchDemo" type="button">
                  <i class="fas fa-play me-2" aria-hidden="true"></i>Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-center">
              <i class="fas fa-users-cog" style="font-size: 15rem; opacity: 0.3;" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="trusted-by-section" role="region" aria-labelledby="trusted-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h2 id="trusted-heading" class="display-5 fw-bold mb-4 trusted-section-heading">Trusted by Leading Aikido Dojos and Associations</h2>
          <p class="lead trusted-section-lead">Join these dojos and associations that have moved to digital-first, paperless memberships</p>
        </div>

        <div class="row g-4 align-items-center justify-content-center">
          <div class="col-lg-2 col-md-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <i class="fas fa-fist-raised logo-icon" aria-hidden="true"></i>
                <div class="logo-name">Dragon's Den</div>
                <div class="logo-discipline">Karate Academy</div>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <i class="fas fa-yin-yang logo-icon" aria-hidden="true"></i>
                <div class="logo-name">Zen Warriors</div>
                <div class="logo-discipline">Taekwondo Club</div>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <i class="fas fa-fire logo-icon" aria-hidden="true"></i>
                <div class="logo-name">Phoenix Martial Arts</div>
                <div class="logo-discipline">Mixed Martial Arts</div>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <i class="fas fa-mountain logo-icon" aria-hidden="true"></i>
                <div class="logo-name">Summit Dojo</div>
                <div class="logo-discipline">Jiu-Jitsu School</div>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <i class="fas fa-bolt logo-icon" aria-hidden="true"></i>
                <div class="logo-name">Lightning Strike</div>
                <div class="logo-discipline">Kickboxing Gym</div>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <i class="fas fa-shield-alt logo-icon" aria-hidden="true"></i>
                <div class="logo-name">Iron Shield</div>
                <div class="logo-discipline">Kung Fu Academy</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    watchDemo() {
      alert('Demo video would play here!')
    }
  }
}
</script>

<style scoped>
</style>

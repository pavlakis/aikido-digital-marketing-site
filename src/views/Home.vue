<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="display-4 fw-bold mb-4">Aikido Membership Management</h1>
              <p class="lead mb-4">Take control of your organisation's memberships. We provide the tools, so that you can focus on the art.</p>
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
          <h2 id="trusted-heading" class="display-5 fw-bold mb-4 trusted-section-heading">Trusted by Leading Aikido Organisations</h2>
          <p class="lead trusted-section-lead">Join these dojos and associations managing their memberships with AikidoDigital</p>
        </div>

        <div class="row g-4 align-items-center justify-content-center">

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/joint-aikikai-council.jpg" alt="Joint Aikikai Council Logo" class="logo-image" />
<!--                <div class="logo-name">Joint Aikikai Council</div>-->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/british-birankai.jpeg" alt="British Birankai Logo" class="logo-image" />
<!--                <div class="logo-name">British Birankai</div>-->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/united-kingdom-aikikai.png" alt="United Kingdom Aikikai Logo" class="logo-image" />
<!--                <div class="logo-name">United Kingdom Aikikai</div>-->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/aikido-bedford.jpg" alt="Aikido Bedford Logo" class="logo-image" />
                <!--                <div class="logo-name">Aikido Bedford</div>-->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/leicester-aikikai.png" alt="Leicester Aikikai Logo" class="logo-image" />
<!--                <div class="logo-name">Leicester Aikikai</div>-->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/british-aikikai.png" alt="British Aikikai Logo" class="logo-image" />
                <!--                <div class="logo-name">British Aikikai</div>-->
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
  name: 'HomeView'
}
</script>

<style scoped>
.hero-icon {
  font-size: 15rem;
  opacity: 0.3;
}

@media (max-width: 992px) {
  .hero-icon {
    font-size: 10rem;
  }
}

@media (max-width: 768px) {
  .hero-icon {
    font-size: 8rem;
    margin-top: 2rem;
  }
}

@media (max-width: 576px) {
  .hero-icon {
    font-size: 6rem;
  }
}

/* Logo sizing to match icon-based logos */
.logo-image {
  width: 6rem; /* increased for prominence */
  height: 6rem;
  min-height: 5.5rem; /* ensure consistent visual baseline */
  max-height: 6rem;   /* prevent oversized images */
  max-width: 100%;
  object-fit: contain;
  display: block; /* make centering reliable */
  margin: 0 auto;
  border-radius: 6px; /* subtle rounding for aesthetic */
}

@media (min-width: 768px) {
  .logo-image {
    width: 8rem;
    height: 8rem;
    min-height: 7.5rem;
    max-height: 8rem;
  }
}

@media (min-width: 1200px) {
  .logo-image {
    width: 12rem;
    height: 12rem;
    min-height: 11.5rem;
    max-height: 12rem;
  }
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
}

.logo-name {
  font-weight: 600;
  margin-top: 0.25rem;
}

.logo-discipline {
  font-size: 0.85rem;
  color: #666;
}
</style>

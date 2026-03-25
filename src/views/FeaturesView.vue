<template>
  <div class="page-content">
    <section class="features-section" role="region" aria-labelledby="all-features-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h1 id="all-features-heading" class="display-4 fw-bold text-dark mb-3">Membership Management Features</h1>
          <p class="lead text-muted">Everything you need to manage your aikido organisation's memberships</p>
        </div>

        <div class="row g-4 mb-5">
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-users" aria-hidden="true"></i>
              </div>
              <h2 class="h4 fw-bold mb-3">Member Management</h2>
              <p>Keep track of your members, their grades, and membership status all in one place.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-sitemap" aria-hidden="true"></i>
              </div>
              <h2 class="h4 fw-bold mb-3">Organisation Structure</h2>
              <p>Manage multiple dojos, regional associations, and national organisations seamlessly.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-file-alt" aria-hidden="true"></i>
              </div>
              <h2 class="h4 fw-bold mb-3">Digital Records</h2>
              <p>Say goodbye to paperwork. All membership records are digitised and easily accessible.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-graduation-cap" aria-hidden="true"></i>
              </div>
              <h2 class="h4 fw-bold mb-3">Grading Records</h2>
              <p>Log and track every member's grading history from beginner to black belt and beyond.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-bell" aria-hidden="true"></i>
              </div>
              <h2 class="h4 fw-bold mb-3">Renewal Reminders</h2>
              <p>Automated membership renewal notices keep your records current without manual chasing.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-chart-bar" aria-hidden="true"></i>
              </div>
              <h2 class="h4 fw-bold mb-3">Reporting &amp; Insights</h2>
              <p>Generate membership reports for your committee, national body, or insurance provider in seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-section" role="region" aria-labelledby="features-cta-heading">
      <div class="container text-center">
        <h2 id="features-cta-heading" class="display-5 fw-bold mb-3">Interested in AikidoDigital?</h2>
        <p class="lead mb-5">Get in touch and we'll walk you through everything.</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: 'FeaturesView' }
</script>

<style scoped>
.page-content {
  padding-top: 100px;
}
</style>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="display-4 fw-bold mb-4">One platform for your entire Aikido organisation</h1>
              <p class="lead mb-4">From individual members and dojos to regional associations and national governing bodies, AikidoDigital brings your membership records, grades, renewals, instructor appointments and reporting together in one purpose-built platform.</p>
              <div class="d-flex gap-3 flex-wrap">
                <router-link to="/contact" class="btn btn-primary">Book a Demo</router-link>
                <router-link to="/features" class="btn btn-outline-primary">Explore the Platform</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-center">
              <i class="fas fa-users-cog hero-icon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="trusted-by-section" role="region" aria-labelledby="trusted-heading" data-nosnippet>
      <div class="container">
        <div class="text-center mb-5">
          <h2 id="trusted-heading" class="display-5 fw-bold mb-4 trusted-section-heading">Trusted by Aikido Associations and Governing Bodies</h2>
          <p class="lead trusted-section-lead">AikidoDigital is already used by national and regional Aikido organisations across the UK to manage their members, dojos and administration.</p>
        </div>

        <div class="row g-4 align-items-center justify-content-center">

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/joint-aikikai-council.jpg" alt="Joint Aikikai Council Logo" class="logo-image" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/british-birankai.jpeg" alt="British Birankai Logo" class="logo-image" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/united-kingdom-aikikai.png" alt="United Kingdom Aikikai Logo" class="logo-image" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/aikido-bedford.jpg" alt="Aikido Bedford Logo" class="logo-image" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/leicester-aikikai.png" alt="Leicester Aikikai Logo" class="logo-image" />
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-6 text-center">
            <div class="logo-container">
              <div>
                <img src="/logos/british-aikikai.png" alt="British Aikikai Logo" class="logo-image" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Core Value Proposition -->
    <section class="features-section" role="region" aria-labelledby="value-prop-heading">
      <div class="container">
        <div class="text-center">
          <h2 id="value-prop-heading" class="display-5 fw-bold text-dark mb-3">Built for the way Aikido organisations are actually structured</h2>
          <p class="lead text-muted" style="max-width: 800px; margin: 0 auto;">
            Aikido organisations aren't run like a single club. Most associations are made up of affiliated dojos, regional structures and a national or governing body overseeing standards, grading and insurance. AikidoDigital is designed around that reality - not adapted from generic club software.
          </p>
        </div>
      </div>
    </section>

    <!-- Major Platform Areas -->
    <section class="features-section" style="background-color: #ffffff;" role="region" aria-labelledby="platform-areas-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h2 id="platform-areas-heading" class="display-5 fw-bold text-dark mb-3">Everything Your Organisation Needs</h2>
          <p class="lead text-muted">One platform, covering every part of running an Aikido organisation</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-users" aria-hidden="true"></i></div>
              <h3 class="fw-bold mb-3">Members</h3>
              <p>Every member's profile, grading history and membership status in one reliable record — no more scattered spreadsheets.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-sitemap" aria-hidden="true"></i></div>
              <h3 class="fw-bold mb-3">Dojos &amp; Organisation Structure</h3>
              <p>Manage individual dojos, their venues and class schedules, all connected up to your regional and national structure.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
              <h3 class="fw-bold mb-3">Grades &amp; Instructor Records</h3>
              <p>Keep a complete, verifiable record of Kyu and Dan grades, teaching titles and instructor appointments by dojo.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-clipboard-check" aria-hidden="true"></i></div>
              <h3 class="fw-bold mb-3">Attendance</h3>
              <p>Fast, mobile-friendly attendance registers make it practical to record attendance every session, not just when it's convenient.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-shield-alt" aria-hidden="true"></i></div>
              <h3 class="fw-bold mb-3">Documentation &amp; Insurance</h3>
              <p>Membership, instructor and venue insurance documentation generated and stored digitally, ready when you need it.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-chart-bar" aria-hidden="true"></i></div>
              <h3 class="fw-bold mb-3">Reporting &amp; Governance</h3>
              <p>Give committees, registrars and governing bodies the reports they need, with appropriate controls over who can see what.</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link to="/features" class="btn btn-primary">See All Features</router-link>
        </div>
      </div>
    </section>

    <!-- Organisational Hierarchy -->
    <section class="features-section" role="region" aria-labelledby="hierarchy-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h2 id="hierarchy-heading" class="display-5 fw-bold text-dark mb-3">One System, Every Level of Your Organisation</h2>
          <p class="lead text-muted" style="max-width: 800px; margin: 0 auto;">
            AikidoDigital reflects the real structure of an Aikido association — individual members belong to dojos, dojos belong to regions or associations, and associations report up to a national governing body. Each level gets the information relevant to its responsibilities, without duplicating admin work at every level.
          </p>
        </div>
        <div class="row g-3 justify-content-center align-items-center text-center">
          <div class="col-md-2 col-6">
            <div class="feature-card py-4">
              <i class="fas fa-user" aria-hidden="true" style="font-size:1.75rem; color: var(--primary-orange);"></i>
              <div class="fw-bold mt-2">Member</div>
            </div>
          </div>
          <div class="col-md-1 col-12 text-center d-none d-md-block">
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </div>
          <div class="col-md-2 col-6">
            <div class="feature-card py-4">
              <i class="fas fa-home" aria-hidden="true" style="font-size:1.75rem; color: var(--primary-orange);"></i>
              <div class="fw-bold mt-2">Dojo</div>
            </div>
          </div>
          <div class="col-md-1 col-12 text-center d-none d-md-block">
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </div>
          <div class="col-md-2 col-6">
            <div class="feature-card py-4">
              <i class="fas fa-sitemap" aria-hidden="true" style="font-size:1.75rem; color: var(--primary-orange);"></i>
              <div class="fw-bold mt-2">Association / Region</div>
            </div>
          </div>
          <div class="col-md-1 col-12 text-center d-none d-md-block">
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </div>
          <div class="col-md-2 col-6">
            <div class="feature-card py-4">
              <i class="fas fa-landmark" aria-hidden="true" style="font-size:1.75rem; color: var(--primary-orange);"></i>
              <div class="fw-bold mt-2">Governing Body</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Administration & Automation Benefits -->
    <section class="features-section" style="background-color: #ffffff;" role="region" aria-labelledby="admin-benefits-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h2 id="admin-benefits-heading" class="display-5 fw-bold text-dark mb-3">Spend Less Time on Repetitive Admin</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-bell" aria-hidden="true"></i></div>
              <p class="mb-0">Spend less time chasing renewals — AikidoDigital tracks membership expiry dates and automatically reminds members when it's time to renew.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-file-alt" aria-hidden="true"></i></div>
              <p class="mb-0">Replace paper forms and spreadsheets with online applications, renewals and up-to-date digital records.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-certificate" aria-hidden="true"></i></div>
              <p class="mb-0">Generate membership and grade certificates automatically, rather than producing them by hand.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance, Roles & Security -->
    <section class="features-section" role="region" aria-labelledby="governance-heading">
      <div class="container">
        <div class="text-center mb-4">
          <h2 id="governance-heading" class="display-5 fw-bold text-dark mb-3">The Right Access for the Right People</h2>
          <p class="lead text-muted" style="max-width: 800px; margin: 0 auto;">
            Registrars, organisation administrators, grade administrators, instructors, chairs and governing-body roles each have access appropriate to their responsibilities — no more, no less. Organisation registrars retain proper control over member data, with two-factor authentication, account protection and administrative audit logs in place to support organisations handling member and junior data responsibly.
          </p>
        </div>
      </div>
    </section>

    <!-- Reporting & Insights -->
    <section class="features-section" style="background-color: #ffffff;" role="region" aria-labelledby="reporting-heading">
      <div class="container">
        <div class="text-center mb-4">
          <h2 id="reporting-heading" class="display-5 fw-bold text-dark mb-3">Reporting Your Committee Can Rely On</h2>
          <p class="lead text-muted" style="max-width: 800px; margin: 0 auto;">
            Produce membership reports, grade reports, organisation statistics and insurance or compliance reporting for committee meetings, AGMs and governing-body returns — without compiling it by hand.
          </p>
        </div>
      </div>
    </section>

    <!-- Marketplace -->
    <section class="features-section" role="region" aria-labelledby="marketplace-heading">
      <div class="container text-center">
        <h2 id="marketplace-heading" class="display-5 fw-bold text-dark mb-3">Grows With Your Organisation</h2>
        <p class="lead text-muted" style="max-width: 800px; margin: 0 auto;">
          As your organisation's needs develop, AikidoDigital's Marketplace lets you activate additional functionality when you need it, rather than paying for capability you don't. Event management functionality is currently in development.
        </p>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-section" role="region" aria-labelledby="cta-heading">
      <div class="container text-center">
        <h2 id="cta-heading" class="display-5 fw-bold mb-3">See AikidoDigital for your organisation</h2>
        <p class="lead mb-5">Talk to us about how AikidoDigital can support your dojos, your administrators and your governing body.</p>
        <a href="mailto:info@aikidodigital.com" class="btn btn-primary btn-lg">Book a Demo</a>
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

</style>

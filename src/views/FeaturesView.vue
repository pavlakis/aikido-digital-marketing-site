<template>
  <div class="page-content">
    <section class="features-section" role="region" aria-labelledby="all-features-heading">
      <div class="container">
        <div class="text-center mb-5">
          <h1 id="all-features-heading" class="display-4 fw-bold text-dark mb-3">One Platform for Your Entire Aikido Organisation</h1>
          <p class="lead text-muted" style="max-width: 800px; margin: 0 auto;">
            AikidoDigital is built specifically for Aikido organisations, associations and governing bodies — not adapted from generic club-management software. Here's what it covers.
          </p>
        </div>

        <div class="row g-4 mb-5">
          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-users" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Members</h2>
              <p>Members apply and renew online, with their profile, membership status and expiry date kept in one reliable record. No more chasing paper forms or maintaining separate spreadsheets for who's paid and who hasn't.</p>
              <p class="mb-0">Spend less time chasing renewals — AikidoDigital tracks membership expiry dates and automatically reminds members when it's time to renew, and generates membership certificates automatically once they do.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-sitemap" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Dojos &amp; Organisation Structure</h2>
              <p>Most Aikido associations aren't a single club — they're made up of affiliated dojos, each with their own venues, class schedules and instructor appointments, sitting within a wider regional or national structure.</p>
              <p class="mb-0">AikidoDigital reflects that hierarchy directly: individual members belong to dojos, dojos belong to regions or associations, and associations report up to a national governing body — all managed in one place.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Grades &amp; Instructor Records</h2>
              <p>Keep a complete, verifiable grading history for every member — Kyu and Dan grades, teaching titles and instructor appointments by dojo — with grade certificates generated digitally rather than issued by hand.</p>
              <p class="mb-0">When a member moves dojos, transfers to another association, or an instructor takes on a new appointment, their record moves with them.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-clipboard-check" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Attendance</h2>
              <p>Class attendance registers are designed to be fast and practical, with mobile-friendly attendance management that makes recording attendance every session realistic — not just an occasional exercise.</p>
              <p class="mb-0">That gives instructors and administrators a reliable attendance history to draw on for gradings, insurance queries or reporting.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-file-contract" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Documentation &amp; Insurance</h2>
              <p>Membership documentation, instructor documentation and venue insurance documentation are generated and stored digitally, so the right paperwork is ready whenever it's needed — for a member, an instructor, or an insurer.</p>
              <p class="mb-0">Certificates and records are produced automatically as part of the normal membership and grading process, rather than as separate admin tasks.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-users-cog" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Roles &amp; Permissions</h2>
              <p>Registrars, organisation administrators, grade administrators, technical administrators, chairs, instructors and governing-body roles all have different responsibilities — and AikidoDigital gives each of them access appropriate to their role, no more and no less.</p>
              <p class="mb-0">Organisation registrars retain proper control over their members' data at all times.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-shield-alt" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Security &amp; Auditability</h2>
              <p>Two-factor authentication and account protection help keep organisation data secure, while administrative audit logs give organisations visibility over changes made within the system.</p>
              <p class="mb-0">These controls are particularly important for organisations handling member and junior/child data, and are built into AikidoDigital as standard.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-chart-bar" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Reporting &amp; Insights</h2>
              <p>Generate membership reports, grade reports, organisation statistics, and insurance or compliance reporting in seconds — ready for committee meetings, AGMs or a governing-body return.</p>
              <p class="mb-0">Reporting is privacy-conscious by design: organisations get aggregated information by default, with controlled workflows for accessing more detailed data where appropriate.</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="feature-card text-start">
              <div class="feature-icon"><i class="fas fa-puzzle-piece" aria-hidden="true"></i></div>
              <h2 class="h4 fw-bold mb-3">Marketplace</h2>
              <p>As your organisation's requirements grow, AikidoDigital's modular Marketplace lets you activate additional functionality when you need it, rather than paying for capability you don't.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-section" role="region" aria-labelledby="features-cta-heading">
      <div class="container text-center">
        <h2 id="features-cta-heading" class="display-5 fw-bold mb-3">Interested in AikidoDigital?</h2>
        <p class="lead mb-5">Book a demo and we'll walk you through how AikidoDigital can support your organisation.</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">Book a Demo</router-link>
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

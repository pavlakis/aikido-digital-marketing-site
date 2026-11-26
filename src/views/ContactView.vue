<template>
  <div style="padding-top: 0;">
    <section class="py-5" role="region" aria-labelledby="contact-heading">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 id="contact-heading" class="display-4 fw-bold text-dark mb-3">Contact AikidoDigital</h1>
            <p class="lead text-muted mb-5">Have a question about AikidoDigital? Get in touch by email.</p>
            <p class="mb-5"><router-link to="/security-data-protection">Security &amp; Data Protection</router-link> · <router-link to="/privacy-policy">Privacy Policy</router-link></p>
            <div class="row g-4 justify-content-center">
              <div class="col-lg-6">
                <div class="p-4 bg-white rounded-3 shadow">
                  <div class="feature-icon mx-auto mb-3">
                    <i class="fas fa-envelope" aria-hidden="true"></i>
                  </div>
                  <h2 class="h4 fw-bold mb-3">Email Us</h2>
                  <p class="text-muted mb-2">
                    <a href="mailto:info@aikidodigital.com" class="text-decoration-none">info@aikidodigital.com</a>
                  </p>
                  <p class="text-muted">Include your organisation name and how we can help.</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="p-4 bg-white rounded-3 shadow">
                  <div class="feature-icon mx-auto mb-3">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </div>
                  <h2 class="h4 fw-bold mb-3">Follow Us</h2>
                  <p class="text-muted mb-2">
                    <a href="https://twitter.com/aikidodigital" target="_blank" rel="noopener noreferrer" class="text-decoration-none">@aikidodigital</a>
                  </p>
                  <p class="text-muted">Connect with us on Twitter</p>
                </div>
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
  name: 'ContactView'
}
</script>

<style scoped>
.page-content {
  padding-top: 0;
}
</style>


<template>
  <div>
    <NavBar />
    <main id="main" role="main" tabindex="-1">
      <router-view />
    </main>

    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 mb-4">
            <h5>AikidoDigital</h5>
            <p>Streamline your aikido dojo management with our comprehensive platform designed for aikido dojos and associations.</p>
            <div class="social-icons">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
            </div>
          </div>

          <!-- Contact info moved to the right column and right-aligned on md+ -->
          <div class="col-lg-6 col-md-6 mb-4 text-md-end">
            <h5>Contact Info</h5>
            <p><i class="fas fa-envelope me-2" aria-hidden="true"></i><a href="mailto:info@dojoflow.com">info@dojoflow.com</a></p>
            <p><i class="fas fa-phone me-2" aria-hidden="true"></i>+1 (555) 123-4567</p>
            <p><i class="fas fa-map-marker-alt me-2" aria-hidden="true"></i>123 Martial Arts Ave, Dojo City, DC 12345</p>
          </div>
        </div>
        <hr class="my-4" style="border-color: #444;">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0">&copy; 2026 Aikido Digital Limited. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <router-link to="/privacy-policy" class="footer-link me-3">Privacy Policy</router-link>
            <a href="#" class="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar }
}
</script>

<style>
.skip-link:focus,
.skip-link:active {
  position: static;
  width: auto;
  height: auto;
  left: 0;
  top: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 1000;
}

a:focus {
  outline: 3px solid #f27d2a;
  outline-offset: 2px;
}

/* keep small overrides local but major theme in theme.css */
body { padding-top: 70px; }
</style>

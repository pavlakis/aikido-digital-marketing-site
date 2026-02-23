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
            <p>Simple membership management for aikido organisations. We provide the tools, so that you can focus on the art.</p>
            <div class="social-icons">
              <a href="https://twitter.com/aikidodigital" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            </div>
          </div>

          <!-- Contact info moved to the right column and right-aligned on md+ -->
          <div class="col-lg-6 col-md-6 mb-4 text-md-end">
            <h5>Connect</h5>
            <p><i class="fas fa-envelope me-2" aria-hidden="true"></i><a href="mailto:info@aikidodigital.com">info@aikidodigital.com</a></p>
            <p><i class="fab fa-twitter me-2" aria-hidden="true"></i><a href="https://twitter.com/aikidodigital" target="_blank" rel="noopener noreferrer">@aikidodigital</a></p>
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
/* Skip to main content link - hidden by default, visible on focus */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid #f27d2a;
  outline-offset: 2px;
}

/* Global focus styles for accessibility */
a:focus {
  outline: 3px solid #f27d2a;
  outline-offset: 2px;
}

button:focus {
  outline: 3px solid #f27d2a;
  outline-offset: 2px;
}

/* keep small overrides local but major theme in theme.css */
body { padding-top: 70px; }
</style>

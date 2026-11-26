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
            <h2 class="h5">AikidoDigital</h2>
            <p>Membership management software for Aikido and martial arts organisations.</p>
            <div class="social-icons">
              <a href="https://twitter.com/aikidodigital" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            </div>
          </div>

          <!-- Contact info moved to the right column and right-aligned on md+ -->
          <div class="col-lg-6 col-md-6 mb-4 text-md-end">
            <h2 class="h5">Connect</h2>
            <p><i class="fas fa-envelope me-2" aria-hidden="true"></i><a href="mailto:info@aikidodigital.com">info@aikidodigital.com</a></p>
            <p><i class="fab fa-twitter me-2" aria-hidden="true"></i><a href="https://twitter.com/aikidodigital" target="_blank" rel="noopener noreferrer">@aikidodigital</a></p>
          </div>
        </div>
        <nav aria-label="Footer navigation" class="row g-4">
          <div class="col-sm-4"><h2 class="h5">Product</h2><ul class="list-unstyled"><li><router-link to="/features">All Features</router-link></li><li v-for="feature in features" :key="feature.slug"><router-link :to="'/' + feature.slug">{{ feature.title }}</router-link></li></ul></div>
          <div class="col-sm-4"><h2 class="h5">Resources</h2><ul class="list-unstyled"><li><router-link to="/resources">Resources</router-link></li><li><router-link to="/whats-new">What’s New</router-link></li></ul></div>
          <div class="col-sm-4"><h2 class="h5">Company</h2><ul class="list-unstyled"><li><router-link to="/about">About AikidoDigital</router-link></li><li><router-link to="/security-data-protection">Security &amp; Data Protection</router-link></li><li><router-link to="/contact">Contact</router-link></li></ul></div>
        </nav>
        <hr class="my-4" style="border-color: #444;">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0">&copy; 2026 Aikido Digital Limited. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
            <span class="footer-sep" aria-hidden="true"> · </span>
            <router-link to="/sub-processors" class="footer-link">Sub-Processors</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { features } from './content/features.mjs'
export default {
  components: { NavBar },
  setup() { return { features } }
}
</script>

<style>
/* Skip to main content link - hidden by default, visible on focus */
.skip-link {
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 10000;
  font-weight: 600;
}

.skip-link:focus {
  transform: translateY(0);
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

<template>
  <div>
    <NavBar />
    <main id="main" class="container mt-5 pt-4" role="main" tabindex="-1">
      <router-view />
    </main>
    <footer class="mt-5 py-4 bg-dark text-light" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-md-6">&copy; 2026 DojoFlow</div>
          <div class="col-md-6 text-md-right">Built with Vue 3 & Bootstrap 4</div>
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

.navbar { box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.navbar-brand { font-weight: 700; color: #F27D2A; }
.nav-link:focus { outline: 3px solid #F27D2A; outline-offset: 2px; }
body { padding-top: 70px; }
.jumbotron { background-color: #F27D2A; }
.jumbotron .lead { color: rgba(0,0,0,0.7); }
</style>

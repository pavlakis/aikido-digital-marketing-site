<template>
  <div>
    <header class="jumbotron py-5 bg-primary text-white rounded" role="banner">
      <div class="container">
        <h1 class="display-4">Manage your dojo with ease</h1>
        <p class="lead">Accessible, responsive, and built with Vue 3 + Bootstrap 4</p>
        <router-link to="/about" class="btn btn-light mt-3">Learn more</router-link>
      </div>
    </header>

    <section class="my-5" aria-labelledby="features-heading">
      <div class="container">
        <h2 id="features-heading">Features</h2>
        <div class="row">
          <article class="col-md-4" tabindex="0">
            <h3>Member Management</h3>
            <p>Keep track of students and memberships.</p>
          </article>
          <article class="col-md-4" tabindex="0">
            <h3>Scheduling</h3>
            <p>Schedule classes and manage bookings.</p>
          </article>
          <article class="col-md-4" tabindex="0">
            <h3>Reports</h3>
            <p>Analytics and detailed reports for your dojo.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: 'HomeView' }
</script>

<style>
.jumbotron { background-color: #F27D2A; }
.jumbotron .lead { color: rgba(0,0,0,0.7); }
</style>

<template>
  <div class="container py-5" role="article" aria-labelledby="privacy-heading">
    <h1 id="privacy-heading" class="display-5 fw-bold mb-4">Privacy Policy</h1>

    <p class="lead">Last updated: February 23, 2026</p>

    <section class="mb-4" aria-labelledby="overview">
      <h2 id="overview" class="h5">Overview</h2>
      <p>This is the marketing website for AikidoDigital. This website does not collect, store, or process any personal data from visitors.</p>
    </section>

    <section class="mb-4" aria-labelledby="what-we-collect">
      <h2 id="what-we-collect" class="h5">Information Collection</h2>
      <p>This marketing website:</p>
      <ul>
        <li><strong>Does not use cookies</strong> - We do not track or store any information about your visit.</li>
        <li><strong>Does not use analytics</strong> - We do not monitor website traffic or user behavior.</li>
        <li><strong>Does not collect form data</strong> - We have no forms on this website.</li>
        <li><strong>Does not store personal information</strong> - No data is collected from website visitors.</li>
      </ul>
    </section>

    <section class="mb-4" aria-labelledby="email-contact">
      <h2 id="email-contact" class="h5">Email Contact</h2>
      <p>If you contact us via email at <a href="mailto:info@aikidodigital.com">info@aikidodigital.com</a>, we will:</p>
      <ul>
        <li>Use your email address and any information you provide solely to respond to your inquiry.</li>
        <li>Not share your information with third parties.</li>
        <li>Delete email correspondence when no longer needed for business purposes.</li>
      </ul>
    </section>

    <section class="mb-4" aria-labelledby="platform-privacy">
      <h2 id="platform-privacy" class="h5">AikidoDigital Platform (aikido.digital)</h2>
      <p>This privacy policy applies only to this marketing website (aikidodigital.com).</p>
      <p>If you are a member of an organisation using the AikidoDigital membership management platform (aikido.digital), data protection practices are governed by:</p>
      <ul>
        <li>The contract between your organisation and Aikido Digital Limited.</li>
        <li>Your organisation's own privacy policy and data protection practices.</li>
        <li>UK GDPR and applicable data protection laws as outlined in the contract.</li>
      </ul>
    </section>

    <section class="mb-4" aria-labelledby="changes">
      <h2 id="changes" class="h5">Changes to this Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.</p>
    </section>

    <section aria-labelledby="contact-us">
      <h2 id="contact-us" class="h5">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <p>
        <strong>Aikido Digital Limited</strong><br>
        Email: <a href="mailto:info@aikidodigital.com">info@aikidodigital.com</a><br>
        Website: <a href="https://aikidodigital.com">https://aikidodigital.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  mounted() {
    // Set page title and meta description for SEO
    document.title = 'Privacy Policy - AikidoDigital';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for AikidoDigital marketing website. This site does not collect any personal data or use cookies.');
    }
  }
}
</script>

<style scoped>
h1, h2 { color: #222; }
ul { margin-left: 1rem; }
a { color: #f27d2a; }
a:hover { color: #d96a1f; }
</style>


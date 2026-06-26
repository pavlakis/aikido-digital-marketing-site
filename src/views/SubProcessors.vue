<template>
  <div class="container py-5" role="article" aria-labelledby="sub-processors-heading">
    <h1 id="sub-processors-heading" class="display-5 fw-bold mb-4">Sub-Processors</h1>

    <p class="lead">Last updated: June 26, 2026</p>

    <section class="mb-4" aria-labelledby="intro">
      <h2 id="intro" class="h5">What is a Sub-Processor?</h2>
      <p>
        Under UK GDPR and EU GDPR, a sub-processor is a third-party provider that processes personal data on our behalf
        as part of delivering the AikidoDigital platform. Aikido Digital Limited, as data processor for your organisation,
        is required to be transparent about which sub-processors we engage and where they are located.
      </p>
      <p>
        The table below lists all third-party sub-processors that may handle personal data in connection with the
        AikidoDigital platform (aikido.digital). This list applies to the platform only — this marketing website
        (aikidodigital.com) does not collect or process personal data.
      </p>
    </section>

    <section class="mb-5" aria-labelledby="processor-list">
      <h2 id="processor-list" class="h5 mb-3">Current Sub-Processors</h2>
      <div class="table-responsive">
        <table class="table table-bordered align-middle">
          <thead class="table-light">
            <tr>
              <th scope="col">Provider</th>
              <th scope="col">Location</th>
              <th scope="col">Purpose</th>
              <th scope="col">Data Processed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>DigitalOcean</strong></td>
              <td><span class="badge location-badge">🇬🇧 UK</span></td>
              <td>Cloud infrastructure and hosting provider for the AikidoDigital platform.</td>
              <td>All platform data at rest and in transit, including member names, contact details, and membership records.</td>
            </tr>
            <tr>
              <td><strong>Mailgun</strong></td>
              <td><span class="badge location-badge">🇪🇺 EU</span></td>
              <td>Transactional email delivery service used to send notifications and communications to members.</td>
              <td>Member email addresses, names, and email content as needed to deliver platform notifications.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mb-4" aria-labelledby="transfers">
      <h2 id="transfers" class="h5">International Data Transfers</h2>
      <p>
        All sub-processors listed above are located within the UK or EU. No personal data is transferred to countries
        outside the UK or EEA in connection with these sub-processors, and no Standard Contractual Clauses (SCCs) or
        adequacy decisions are required.
      </p>
    </section>

    <section class="mb-4" aria-labelledby="updates">
      <h2 id="updates" class="h5">Changes to Sub-Processors</h2>
      <p>
        We will update this page whenever we add, change, or remove a sub-processor. If you are a data controller
        using the AikidoDigital platform, your contract with Aikido Digital Limited governs notice periods for
        sub-processor changes.
      </p>
    </section>

    <section aria-labelledby="contact-sp">
      <h2 id="contact-sp" class="h5">Questions</h2>
      <p>
        If you have any questions about our sub-processors or data processing practices, please contact us:
      </p>
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
  name: 'SubProcessors',
  mounted() {
    document.title = 'Sub-Processors - AikidoDigital';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'List of GDPR sub-processors used by Aikido Digital Limited in the delivery of the AikidoDigital membership management platform.');
    }
  }
}
</script>

<style scoped>
h1, h2 { color: #222; }
ul { margin-left: 1rem; }
a { color: #f27d2a; }
a:hover { color: #d96a1f; }
.table th { font-weight: 600; }
.location-badge {
  background-color: #f0f0f0;
  color: #333;
  font-weight: 500;
  font-size: 0.85rem;
}
</style>


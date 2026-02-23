<template>
  <div style="padding-top: 100px;">
    <section class="py-5" role="region" aria-labelledby="contact-heading">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="text-center mb-5">
              <h1 id="contact-heading" class="display-4 fw-bold text-dark mb-3">Get In Touch</h1>
              <p class="lead text-muted">Have questions about Aikido Digital? We're here to help.</p>
            </div>

            <form @submit.prevent="submitForm" class="bg-white p-5 rounded-3 shadow" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="name" class="form-label fw-semibold">Full Name *</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="name"
                    v-model="form.name"
                    required
                    aria-describedby="name-help">
                  <div id="name-help" class="form-text">Please enter your full name</div>
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label fw-semibold">Email Address *</label>
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="email"
                    v-model="form.email"
                    required
                    aria-describedby="email-help">
                  <div id="email-help" class="form-text">We'll never share your email</div>
                </div>
                <div class="col-12">
                  <label for="subject" class="form-label fw-semibold">Subject *</label>
                  <select
                    class="form-select form-select-lg"
                    id="subject"
                    v-model="form.subject"
                    required
                    aria-describedby="subject-help">
                    <option value="">Choose a subject...</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="demo">Request Demo</option>
                    <option value="other">Other</option>
                  </select>
                  <div id="subject-help" class="form-text">Select the topic that best describes your inquiry</div>
                </div>
                <div class="col-12">
                  <label for="message" class="form-label fw-semibold">Message *</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                    v-model="form.message"
                    required
                    aria-describedby="message-help"
                    placeholder="Tell us how we can help you..."></textarea>
                  <div id="message-help" class="form-text">Please provide details about your inquiry</div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-lg px-5">
                    <i class="fas fa-paper-plane me-2" aria-hidden="true"></i>Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="row mt-5 g-4">
          <div class="col-lg-4 text-center">
            <div class="feature-icon mx-auto mb-3">
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <h4 class="fw-bold">Email Us</h4>
            <p class="text-muted mb-2">info@aikidodigital.com</p>
            <p class="text-muted">We typically respond within 24 hours</p>
          </div>
          <div class="col-lg-4 text-center">
            <div class="feature-icon mx-auto mb-3">
              <i class="fas fa-phone" aria-hidden="true"></i>
            </div>
            <h4 class="fw-bold">Call Us</h4>
            <p class="text-muted mb-2">+1 (555) 123-4567</p>
            <p class="text-muted">Mon-Fri 9AM-6PM EST</p>
          </div>
          <div class="col-lg-4 text-center">
            <div class="feature-icon mx-auto mb-3">
              <i class="fas fa-comments" aria-hidden="true"></i>
            </div>
            <h4 class="fw-bold">Live Chat</h4>
            <p class="text-muted mb-2">Available 24/7</p>
            <button class="btn btn-outline-primary" type="button">Start Chat</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ContactView',
  setup() {
    const form = ref({ name: '', email: '', subject: '', message: '' })
    const submitForm = () => {
      alert("Thank you for your message! We'll get back to you soon.")
      form.value = { name: '', email: '', subject: '', message: '' }
    }
    return { form, submitForm }
  }
}
</script>

<style scoped>

</style>


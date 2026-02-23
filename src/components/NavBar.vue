<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" role="navigation" aria-label="Main navigation">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/" aria-label="AikidoDigital Home">
        <img src="/aikido-digital-32x32-small.png" alt="AikidoDigital logo" width="32" height="32" />
        <span class="brand"><span class="brand-a">Aikido</span><span class="brand-d">Digital</span></span>
      </router-link>

      <button
        ref="toggleButton"
        class="navbar-toggler"
        type="button"
        @click="toggle"
        :aria-expanded="isOpen.toString()"
        aria-controls="navbarNav"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['collapse', 'navbar-collapse', { show: isOpen }]" id="navbarNav" ref="navPanel" @keydown="onKeydown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.name === 'Home' }" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.name === 'Features' }" :to="{ name: 'Features' }">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: $route.name === 'Contact' }" :to="{ name: 'Contact' }">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onBeforeUnmount, nextTick } from 'vue'

function getFocusableElements(container) {
  if (!container) return []
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  )
}

export default {
  name: 'NavBar',
  setup() {
    const isOpen = ref(false)
    const navPanel = ref(null)
    const toggleButton = ref(null)
    let focusable = []

    function open() {
      isOpen.value = true
      nextTick(() => {
        focusable = getFocusableElements(navPanel.value)
        if (focusable.length) focusable[0].focus()
      })
      document.addEventListener('focusin', maintainFocus)
    }

    function close() {
      isOpen.value = false
      toggleButton.value?.focus()
      document.removeEventListener('focusin', maintainFocus)
    }

    function toggle() {
      if (isOpen.value) close()
      else open()
    }

    function maintainFocus(e) {
      if (!isOpen.value || !navPanel.value) return
      if (navPanel.value.contains(e.target) || toggleButton.value.contains(e.target)) return
      // If focus moved outside, bring it back to first focusable
      if (focusable.length) focusable[0].focus()
      else toggleButton.value?.focus()
    }

    function onKeydown(e) {
      if (!isOpen.value) return
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      }
      if (e.key === 'Tab') {
        // basic trapping
        focusable = getFocusableElements(navPanel.value)
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    onBeforeUnmount(() => document.removeEventListener('focusin', maintainFocus))

    return { isOpen, toggle, navPanel, toggleButton, onKeydown }
  }
}
</script>

<style>
.navbar { box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.navbar-brand { font-weight: 700; color: #F27D2A; }
.navbar-brand .brand { display: inline-block; margin-left: 0.5rem; }
.navbar-brand .brand-a { color: #000000; }
.navbar-brand .brand-d { color: #ff0000; }
.nav-link:focus { outline: 3px solid #F27D2A; outline-offset: 2px; }
body { padding-top: 70px; }
</style>

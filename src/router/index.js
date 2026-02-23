import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FeaturesView from '../views/FeaturesView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/features', name: 'Features', component: FeaturesView },
  { path: '/pricing', name: 'Pricing', component: PricingView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

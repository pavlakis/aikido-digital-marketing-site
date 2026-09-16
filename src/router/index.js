import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FeaturesView from '../views/FeaturesView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import SubProcessors from '../views/SubProcessors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'AikidoDigital - One Platform for Your Entire Aikido Organisation',
      description: 'AikidoDigital is the platform built specifically for Aikido organisations, associations and governing bodies — managing members, dojos, grades, renewals and reporting in one place.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About AikidoDigital - Built for Aikido Organisations',
      description: 'AikidoDigital is built specifically for Aikido organisations, associations and governing bodies, reflecting the way they are actually structured — from members and dojos to national governing bodies.'
    }
  },
  {
    path: '/features',
    name: 'Features',
    component: FeaturesView,
    meta: {
      title: 'Features - Members, Dojos, Grades & Reporting | AikidoDigital',
      description: 'Explore how AikidoDigital manages members, dojos, grades, instructor records, attendance, documentation, roles, security and reporting for Aikido organisations.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Book a Demo - Contact AikidoDigital',
      description: 'Talk to AikidoDigital about how our platform can support your dojos, your administrators and your governing body. Book a demo today.'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy | AikidoDigital',
      description: 'Read AikidoDigital\'s privacy policy covering how we handle member, instructor and organisation data.'
    }
  },
  {
    path: '/sub-processors',
    name: 'SubProcessors',
    component: SubProcessors,
    meta: {
      title: 'Sub-Processors | AikidoDigital',
      description: 'A list of the sub-processors AikidoDigital uses to deliver its platform to Aikido organisations.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const BASE_URL = 'https://aikidodigital.com'
const DEFAULT_TITLE = 'AikidoDigital - One Platform for Your Entire Aikido Organisation'
const DEFAULT_DESCRIPTION = 'AikidoDigital is the platform built specifically for Aikido organisations, associations and governing bodies — managing members, dojos, grades, renewals and reporting in one place.'

function setMetaTag(name, content, attribute = 'name') {
  if (!content) return
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

router.afterEach((to) => {
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  const canonicalHref = BASE_URL + to.path
  canonical.setAttribute('href', canonicalHref)

  const title = to.meta?.title || DEFAULT_TITLE
  const description = to.meta?.description || DEFAULT_DESCRIPTION

  document.title = title
  setMetaTag('title', title)
  setMetaTag('description', description)
  setMetaTag('og:title', title, 'property')
  setMetaTag('og:description', description, 'property')
  setMetaTag('og:url', canonicalHref, 'property')
  setMetaTag('twitter:title', title, 'property')
  setMetaTag('twitter:description', description, 'property')
  setMetaTag('twitter:url', canonicalHref, 'property')
})

export default router



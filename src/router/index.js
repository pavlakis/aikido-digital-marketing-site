import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { pages } from '../content/pages.mjs'
import { updateSeo } from '../seo.mjs'
const views = import.meta.glob('../views/*.vue')
export function makeRouter(server = false) {
  const router = createRouter({
    history: server ? createMemoryHistory() : createWebHistory(),
    routes: [
      ...pages.map(page => ({ path: page.path, name: page.name || page.path, component: views[`../views/${page.view}.vue`], props: page.props, meta: page })),
      { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue'), meta: { title: 'Page Not Found | AikidoDigital', description: 'Find membership software features, resources and contact information for AikidoDigital.', noindex: true } }
    ],
    scrollBehavior(to) { return to.hash ? { el: to.hash, top: 90 } : { top: 0 } }
  })
  if (!server) router.afterEach((to) => updateSeo(to.meta, to.meta.path || to.path))
  return router
}

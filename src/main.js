import { createApp, createSSRApp, nextTick } from 'vue'
import App from './App.vue'
import { makeRouter } from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/theme.css'
const router = makeRouter()
const app = (document.getElementById('app').hasChildNodes() ? createSSRApp : createApp)(App)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
  router.afterEach(async () => { await nextTick(); document.getElementById('main')?.focus({ preventScroll: true }) })
})

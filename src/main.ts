import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import routes from 'virtual:generated-pages'
import App from '~/App.vue'

import '@unocss/reset/tailwind.css'
import '~/styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const pinia = createPinia()
const head = createHead()
app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')

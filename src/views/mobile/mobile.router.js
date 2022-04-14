import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'mobileHome',
    component:()=> import('./page/Home.vue')

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component:()=> import('./page/Index.vue')

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

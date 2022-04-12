import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '/codep', name: 'codep', component: () => import('../views/CodeP.vue') }

    ]
  },
  { path: '/codep', name: 'codep', component: () => import('../views/CodeP.vue') },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music')
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/backstage',
    name: 'Backstage',
    component: () => import('../views/Backstage')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

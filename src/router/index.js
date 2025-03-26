import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/:url',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/:url',
    name: 'privacy',
    component: () => import('@/views/PrivacyPolicyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router

import { createRouter, createWebHistory } from 'vue-router'

/**
 * Definicion de rutas de la aplicacion.
 * Cada ruta mapea una URL a un componente de vista.
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/:url',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue')
  },
  {
    path: '/:url',
    name: 'about',
    component: () => import('@/views/AboutMeView.vue')
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

/**
 * Instancia del enrutador de Vue Router.
 * Usa historial basado en `history.pushState`.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router

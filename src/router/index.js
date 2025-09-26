import { createRouter, createWebHistory } from 'vue-router'

/**
 * Definicion de rutas de la aplicacion.
 * Cada ruta mapea una URL a un componente de vista.
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutMeView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact' }
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: () => import('@/views/PrivacyPolicyView.vue'),
    meta: { title: 'Privacy policy' }
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

/**
 * Este hook toma el valor de `meta.title` definido en la ruta de destino 
 * (`to.meta?.title`) y lo asigna al titulo del documento (`document.title`).
 * De esta forma, el contenido de la pestaña del navegador se actualiza 
 * dinamicamente en funcion de la ruta visitada.
 */
router.afterEach((to) => {
  const title = to.meta?.title
  document.title = `Pedro Rizquez | ${title}`
})

export default router

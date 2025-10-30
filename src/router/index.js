import { createRouter, createWebHistory } from 'vue-router'

/**
 * Definition of application routes.
 * 
 * Each route maps a URL to a view component.
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
 * Instance of the Vue Router router.
 * Uses history based on `history.pushState`.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

/**
 * This hook takes the value of `meta.title` defined in the destination path 
 * (`to.meta?.title`) and assigns it to the document title (`document.title`).
 * 
 * This way, the content of the browser tab is dynamically updated 
 * based on the path visited.
 */
router.afterEach((to) => {
  const title = to.meta?.title
  document.title = `Pedro Rizquez | ${title}`
})

export default router

import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'

/**
 * Create a new instance of the Vue application.
 */
const app = createApp(App)

/**
 * Use Pinia as a global state system.
 */
app.use(createPinia())

/**
 * Use Vue Router for route management.
 */
app.use(router)

/**
 * Mount the application on the element with ID app.
 */
app.mount('#app')

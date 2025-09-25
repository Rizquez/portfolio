import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'

/**
 * Crea una nueva instancia de la aplicacion Vue.
 */
const app = createApp(App)

/**
 * Usa Pinia como sistema de estado global.
 */
app.use(createPinia())

/**
 * Usa Vue Router para el manejo de rutas.
 */
app.use(router)

/**
 * Monta la aplicacion en el elemento con ID 'app'.
 */
app.mount('#app')

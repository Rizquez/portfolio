// Importamos los estilos globales
import '@/assets/main.css'

// Importamos las funciones principales de Vue y Pinia para manejo de estado global
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Importamos el componente raiz de la aplicacion y la instancia del enrutador de Vue Router
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

<script setup>
import { useRouter, useRoute } from 'vue-router'

/**
 * Instancia del enrutador de Vue Router.
 * Usada para redireccionar a otras rutas programaticamente.
 */
const router = useRouter()

/**
 * Informacion de la ruta actual.
 * Usada para saber si ya estamos en la pagina de inicio ('home').
 */
const route = useRoute()

/**
 * Navega o hace scroll a una seccion especifica dentro de la pagina.
 * - Si ya estamos en la pagina 'home', hace scroll suave hacia la seccion.
 * - Si no estamos en 'home', guarda el ID de la seccion en sessionStorage y redirige a 'home' para luego hacer scroll desde alli.
 * @function goToSection
 * @param {string} sectionId - El ID del elemento al que se desea hacer scroll.
 * @returns {void}
 */
const goToSection = (sectionId) => {
  if (route.name === 'home') {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Retry en caso de que el elemento aun no este en el DOM (por ejemplo, por lazy loading)
      setTimeout(() => {
        const elRetry = document.getElementById(sectionId)
        if (elRetry) {
          elRetry.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  } else {
    // Guardamos el objetivo en sessionStorage para usarlo despues del redireccionamiento
    sessionStorage.setItem('scrollToSection', sectionId)
    router.push({ name: 'home' })
  }
}
</script>

<template>
  <header>
    <div>
      <img src="@/assets/images/code-thinking.svg" alt="code-thinking">
    </div>
    <div class="routers">
      <router-link :to="{ name: 'home'}" class="router">Home</router-link>
      <a class="router" @click.prevent="goToSection('about')">About</a>
      <a class="router" @click.prevent="goToSection('projects')">Projects</a>
    </div>
    <div>
      <router-link :to="{ name: 'contact', params: { url: 'contact-me' }}" class="router contact">Contact me</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
}
header img {
  max-width: 150px;
  max-height: auto;
}
header .router {
  text-decoration: none;
  font-weight: lighter;
  color: var(--text-100);
  font-size: var(--p-font);
  cursor: pointer;
}
header .router:hover {
  color: var(--primary-100);
}

.routers {
  display: flex;
  gap: 8rem;
}

.contact {
  border: 1px solid var(--text-100);
  border-radius: 50px;
  padding: 5px 10px;
}
.contact:hover {
  background-color: var(--accent-200);
}
</style>
 
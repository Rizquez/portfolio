<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Indica si el boton para volver al principio debe mostrarse.
 * Se activa cuando el usuario ha hecho scroll mas de 100 pixeles.
 * @type {import('vue').Ref<boolean>}
 */
const isVisible = ref(false)

/**
 * Maneja el evento de scroll para mostrar u ocultar el boton.
 * Si el scroll vertical supera los 100px, se activa `isVisible`.
 * @function handleScroll
 * @returns {void}
 */
const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

/**
 * Realiza un scroll suave hacia la parte superior de la pagina.
 * @function scrollToTop
 * @returns {void}
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Agrega el event listener de scroll al montar el componente.
 */
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

/**
 * Elimina el event listener de scroll al desmontar el componente.
 */
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div v-if="isVisible" class="back-to-top" @click="scrollToTop">⤴︎</div>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: var(--text-100);
  width: 50px;
  height: 50px;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 1000; 
}
</style>

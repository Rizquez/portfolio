<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Indica si el boton para volver al principio debe mostrarse.
 * 
 * Se activa cuando el usuario ha hecho scroll mas de 100 pixeles.
 */
const isVisible = ref(false)

/**
 * Maneja el evento de scroll para mostrar u ocultar el boton.
 * 
 * Si el scroll vertical supera los 100px, se activa `isVisible`.
 */
const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

/**
 * Realiza un scroll suave hacia la parte superior de la pagina.
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
.back-to-top:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .back-to-top {
    width: 45px;
    height: 45px;
    font-size: 1.8em;
    bottom: 15px;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .back-to-top {
    width: 40px;
    height: 40px;
    font-size: 1.5em;
    bottom: 10px;
    right: 10px;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Indicates whether the button to return to the top should be displayed.
 * 
 * Activated when the user has scrolled more than 100 pixels.
 */
const isVisible = ref(false)

/**
 * Handles the scroll event to show or hide the button.
 * 
 * If the vertical scroll exceeds 100px, `isVisible` is activated.
 */
const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

/**
 * Gently scroll to the top of the page.
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Add the scroll event listener when mounting the component.
 */
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

/**
 * Remove the scroll event listener when unmounting the component.
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

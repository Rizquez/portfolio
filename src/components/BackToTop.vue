<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

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
  color: var(--black);
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
</style>

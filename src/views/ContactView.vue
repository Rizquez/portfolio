<script setup>
import HeadNav from '@/components/HeadNav.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main>
    <HeadNav/>
    <Contact/>
    <Footer/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main > * {
  flex-shrink: 0;
}

main > :last-child {
  margin-top: auto; /* Empuja el footer hacia abajo si hay espacio */
}
</style>

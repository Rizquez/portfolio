<script>
import BackToTop from '@/components/BackToTop.vue'
export default {
  name: 'App',
  components: {
    BackToTop
  },
  watch: {
    // Observamos el objeto $route que representa la ruta actual
    // Y ejecutamos el metodo cada vez que la ruta cambia
    '$route' (to, from) {
      this.scrollToTop();
    }
  },
  methods: {
    // Metodo que desplaza la ventana al inicio de la pagina
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <BackToTop />
  </div>
</template>

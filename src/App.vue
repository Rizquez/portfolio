<script>
import BackToTop from '@/components/BackToTop.vue'

export default {
  /**
   * Nombre del componente raiz de la aplicacion
   */
  name: 'App', 
  /**
   * Componentes registrados localmente
   */
  components: {
    BackToTop,
  },
  watch: {
    /**
     * Observa los cambios de ruta.
     * 
     * Al cambiar de ruta, se ejecuta scroll hacia el tope de la pagina.
     * 
     * @param to - Nueva ruta.
     * @param from - Ruta anterior.
     */
    '$route' (to, from) {
      this.scrollToTop();
    }
  },
  methods: {
    /**
     * Hace scroll instantaneo hacia la parte superior de la ventana.
     */
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
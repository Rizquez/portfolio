<script>
import BackToTop from '@/components/BackToTop.vue'

export default {
  /**
   * Name of the root component of the application.
   */
  name: 'App', 
  /**
   * Locally registered components.
   */
  components: {
    BackToTop,
  },
  watch: {
    /**
     * Observe route changes.
     * 
     * When changing routes, scroll to the top of the page.
     * 
     * @param to - New route.
     * @param from - Previous route.
     */
    '$route' (to, from) {
      this.scrollToTop();
    }
  },
  methods: {
    /**
     * Instantly scrolls to the top of the window.
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
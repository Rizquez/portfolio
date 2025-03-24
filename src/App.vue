<script>
import BackToTop from '@/components/BackToTop.vue'
export default {
  name: 'App',
  components: {
    BackToTop
  },
  watch: {
    '$route' (to, from) {
      this.scrollToTop();
    }
  },
  methods: {
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

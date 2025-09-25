import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Pinia store para el contador.
 * Maneja un valor numerico con un contador simple, 
 * su doble y una funcion para incrementarlo.
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

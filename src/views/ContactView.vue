<script setup>
import { ref } from 'vue'

// Componentes usados en esta vista
import AlertModal from '@/components/AlertModal.vue'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'

/**
 * Valor del input de email del formulario.
 * @type {import('vue').Ref<string>}
 */
const email = ref('')

/**
 * Mensaje a mostrar dentro del modal de alerta.
 * @type {import('vue').Ref<string>}
 */
const modalMessage = ref('')

/**
 * Controla la visibilidad del modal de alerta.
 * @type {import('vue').Ref<boolean>}
 */
const isModalVisible = ref(false)

/**
 * Cierra el modal de alerta.
 * @function handleModalClose
 * @returns {void}
 */
const handleModalClose = () => {
  isModalVisible.value = false
}

/**
 * Valida el formato de un email usando expresion regular.
 * @function validateEmail
 * @param {string} emailString - El email a validar.
 * @returns {boolean} `true` si el email es valido, `false` en caso contrario.
 */
const validateEmail = (emailString) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(emailString)
}

/**
 * Maneja el envio del formulario:
 * - Valida el email ingresado.
 * - Muestra un mensaje en un modal de alerta dependiendo del resultado.
 * @function handleFormSubmit
 * @returns {void}
 */
const handleFormSubmit = () => {
  if (validateEmail(email.value)) {
    modalMessage.value = 'Email sent successfully ✅'
  } else {
    modalMessage.value = 'Invalid email format, please enter a valid email ❌'
  }
  isModalVisible.value = true
}
</script>

<template>
  <main>
    <Head/>
    
    <section>
      <form @submit.prevent="handleFormSubmit">
        <input type="text" placeholder="Email address" v-model="email" required>
        <input type="text" placeholder="Subject" required>
        <textarea name="" id="" cols="50" rows="10" placeholder="Write your message here" required></textarea>
        <button type="submit">Send message</button>
      </form>
    </section>

    <Footer/>

    <AlertModal :message="modalMessage" :visible="isModalVisible" @close="handleModalClose"/>
  </main>
</template>

<style scoped>
form {
  padding-top: 100px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--p-font);
  font-weight: lighter;
}
form textarea,
form input[type="text"],
form button {
  padding: 10px;
  border-radius: 10px;
  border: 3px solid var(--primary-300);
}
form textarea {
  resize: none;
}
form button {
  color: var(--primary-300);
  background-color: var(--primary-100);
}
form button:hover {
  color: var(--primary-100);
  background-color: var(--primary-300);
}

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
  margin-top: auto;
}
</style>

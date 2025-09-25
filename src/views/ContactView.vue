<script setup>
import { ref } from 'vue'

import Head from '@/components/Head.vue'
import AlertModal from '@/components/AlertModal.vue'
import Footer from '@/components/Footer.vue'

/**
 * Valor del input de email del formulario.
 */
const email = ref('')

/**
 * Mensaje a mostrar dentro del modal de alerta.
 */
const modalMessage = ref('')

/**
 * Controla la visibilidad del modal de alerta.
 */
const isModalVisible = ref(false)

/**
 * Cierra el modal de alerta.
 */
const handleModalClose = () => {
  isModalVisible.value = false
}

/**
 * Valida el formato de un email usando expresion regular.
 * 
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
 */
const handleFormSubmit = () => {
  if (validateEmail(email.value)) {
    modalMessage.value = '✅ Email sent successfully.'
  } else {
    modalMessage.value = '⚠️ Invalid email format, please enter a valid email.'
  }
  isModalVisible.value = true
}
</script>

<template>
  <main class="page">
    <Head />
    
    <section class="page-content">
      <h1>Contact me</h1>
      <h2>Send me your inquiry or project and I will respond as soon as possible</h2>
      <form @submit.prevent="handleFormSubmit">
        <input type="text" placeholder="Name" required>
        <input type="text" placeholder="Email address" v-model="email" required>
        <input type="text" placeholder="Subject" required>
        <textarea name="" id="" cols="50" rows="10" placeholder="Write your message here" required></textarea>
        <button type="submit">Send message</button>
      </form>
    </section>

    <Footer />
    <AlertModal :message="modalMessage" :visible="isModalVisible" @close="handleModalClose"/>
  </main>
</template>

<style scoped>
h1, h2 {
  color: var(--primary-100);
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 2.5rem;
}

h2 {
  font-weight: lighter;
  font-size: 1.5rem;
}

form {
  padding-top: 20px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.3rem;
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

@media (max-width: 1000px) {
  form {
    width: 600px;
    font-size: 1.2rem;
  }

  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  form {
    width: 90%;
    font-size: 1.05rem;
    padding-top: 80px;
  }
  form textarea,
  form input[type="text"],
  form button {
    padding: 8px;
  }
  form textarea {
    height: 200px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1rem;
    padding: 0px 20px;
  }
}

@media (max-width: 480px) {
  form {
    width: 90%;
    font-size: 1rem;
    padding-top: 60px;
    gap: 0.8rem;
  }
  form textarea,
  form input[type="text"],
  form button {
    padding: 6px;
    font-size: 0.95rem;
  }
  form textarea {
    height: 150px;
  }

  h1 {
    font-size: 1.8rem;
  }
}
</style>

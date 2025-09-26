<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
import AlertModal from '@/components/AlertModal.vue'

/**
 * ID del servicio configurado en EmailJS.
 * 
 * Se obtiene en el panel de EmailJS dentro de la seccion "Email Services".
 */
const SERVICE_ID = 'service_4go4bqq'

/**
 * ID de la plantilla de correo creada en EmailJS.
 * 
 * Define el subject y el body usando placeholders como {{name}}, {{email}}, {{message}}.
 */
const TEMPLATE_ID = 'template_b0tny8r'

/**
 * Clave publica proporcionada por EmailJS para autenticar las peticiones desde el cliente. 
 * 
 * Es segura de exponer en el frontend.
 */
const PUBLIC_KEY  = 'kuTMf8Ax5bYS7e0_d'

/**
 * Nombre del remitente ingresado en el formulario.
 */
const name = ref('')

/**
 * Direccion de correo del remitente ingresada en el formulario.
 */
const email = ref('')   

/**
 * Asunto del mensaje ingresado en el formulario.
 */
const subject = ref('')

/**
 * Contenido principal del mensaje escrito en el formulario.
 */
const message = ref('')

/**
 * Campo honeypot oculto en el formulario.
 * 
 * Se utiliza como tecnica anti-spam: si este campo tiene contenido, se asume que el envio proviene de un bot.
 */
const honeypot = ref('')

/**
 * Mensaje mostrado dentro del modal de alerta (feedback al usuario tras validar o enviar el formulario).
 */
const modalMessage = ref('')

/**
 * Controla la visibilidad del modal de alerta.
 */
const isModalVisible = ref(false)

/**
 * Estado de carga al enviar el formulario.
 * 
 * Mientras sea `true`, los inputs y el boton se deshabilitan para evitar envios multiples.
 */
const loading = ref(false)

/**
 * Cierra el modal de alerta.
 * 
 * Se ejecuta cuando el usuario hace clic en el boton de cierre.
 */
const handleModalClose = () => {
  isModalVisible.value = false
}

/**
 * Valida el formato de un email utilizando una expresion regular basica.
 * 
 * @param emailString - La direccion de correo a validar.
 * @returns `true` si el email tiene un formato valido, `false` en caso contrario.
 */
const validateEmail = (emailString) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(emailString)
}

/**
 * Maneja el envio del formulario de contacto:
 * - Evita envios de bots verificando el honeypot.
 * - Valida que los campos requeridos esten completos y correctos.
 * - Envia los datos a traves de EmailJS usando el servicio, plantilla y clave publica configurados.
 * - Muestra un mensaje de exito o error en el modal de alerta.
 */
const handleFormSubmit = async () => {
  if (honeypot.value) return 

  if (!validateEmail(email.value) || !name.value.trim() || !subject.value.trim() || !message.value.trim()) {
    modalMessage.value = '⚠️ Review the fields: fill in everything and verify your email address'
    isModalVisible.value = true
    return
  }

  loading.value = true
  try {
    const params = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }

    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })

    if (res.status === 200) {
      modalMessage.value = '✅ Message sent, I will reply as soon as possible'
      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
    } else {
      modalMessage.value = '❌ The message could not be sent, please try again later.'
    }
  } catch (e) {
    modalMessage.value = '❌ Error sending email, please contact me directly at pedro.rizquez.94@hotmail.com'
  } finally {
    loading.value = false
    isModalVisible.value = true
  }
}
</script>

<template>
  <main class="page">
    <Head />
    
    <section class="page-content">
      <h1>Contact me</h1>
      <h2>Send me your inquiry or project and I will respond as soon as possible</h2>
      <form @submit.prevent="handleFormSubmit" novalidate>
        <input v-model="honeypot" class="anti-spam" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <input type="text" placeholder="Name" v-model.trim="name" required :disabled="loading">
        <input type="email" placeholder="Email address" v-model.trim="email" required :disabled="loading">
        <input type="text" placeholder="Subject" v-model.trim="subject" required :disabled="loading">
        <textarea cols="50" rows="10" placeholder="Write your message here" v-model.trim="message" required :disabled="loading"></textarea>
        <button type="submit" :disabled="loading">{{ loading ? 'Sending…' : 'Send message' }}</button>
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
form input[type="email"],
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

.anti-spam {
  display:none !important;
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

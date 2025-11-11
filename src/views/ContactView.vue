<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import AlertModal from '@/components/AlertModal.vue'

/**
 * Service ID configured in EmailJS.
 * 
 * This can be found in the EmailJS panel in the "Email Services" section.
 */
const SERVICE_ID = 'service_4go4bqq'

/**
 * ID of the email template created in EmailJS.
 * 
 * Define the subject and body using placeholders such as {{name}}, {{email}}, {{message}}.
 */
const TEMPLATE_ID = 'template_b0tny8r'

/**
 * Public key provided by EmailJS to authenticate requests from the client. 
 * 
 * It is safe to expose on the frontend.
 */
const PUBLIC_KEY  = 'kuTMf8Ax5bYS7e0_d'

/**
 * Sender's name entered on the form.
 */
const name = ref('')

/**
 * Sender's email address entered in the form.
 */
const email = ref('')   

/**
 * Subject of the message entered in the form.
 */
const subject = ref('')

/**
 * Main content of the message written in the form.
 */
const message = ref('')

/**
 * Hidden honeypot field in the form.
 * 
 * Used as an anti-spam technique: if this field has content, it is assumed that the submission comes from a bot.
 */
const honeypot = ref('')

/**
 * Form submission indicator.
 */
const submitted = ref(false)

/**
 * Reference to the <form> element in the template.
 */
const formElements = ref(null)

/**
 * Message displayed within the alert modal (feedback to the user after validating or submitting the form).
 */
const modalMessage = ref('')

/**
 * Controls the visibility of the alert modal.
 */
const isModalVisible = ref(false)

/**
 * Loading status when submitting the form.
 * 
 * As long as it is `true`, the inputs and button are disabled to prevent multiple submissions.
 */
const loading = ref(false)

/**
 * Closes the alert modal.
 * 
 * Runs when the user clicks the close button.
 */
const handleModalClose = () => {
  isModalVisible.value = false
}

/**
 * Handles the submission of the contact form:
 * - Prevents bot submissions by verifying the honeypot.
 * - Validates that the required fields are complete and correct.
 * - Sends the data via EmailJS using the configured service, template, and public key.
 * - Displays a success or error message in the alert modal.
 */
const handleFormSubmit = async () => {
  if (honeypot.value) return 

  submitted.value = true // Mark as sent to activate styles

  // Use native HTML5 validation (required, type="email", ...)
  if (!formElements.value?.checkValidity()) {
    modalMessage.value = '⚠️ Review the fields: fill in everything and verify that your email address is valid'
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

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })

    if (response.status === 200) {
      modalMessage.value = '✅ Message sent, I will reply as soon as possible'
      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
      submitted.value = false // Reset sent status to hide red marks
    } else {
      modalMessage.value = '⚠️ The message could not be sent, please try again later.'
    }
  } catch (_) {
    modalMessage.value = '❌ Error sending email, please contact me directly at pedro.rizquez.94@hotmail.com'
  } finally {
    loading.value = false
    isModalVisible.value = true
  }
}
</script>

<template>
  <main class="page">
    <MainHeader />
    
    <section class="page-content">
      <h1>Contact me</h1>
      <h2>Send me your inquiry or project and I will respond as soon as possible</h2>
      <form ref="formElements" @submit.prevent="handleFormSubmit" novalidate :class="{ submitted }">
        <input v-model="honeypot" class="anti-spam" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <input type="text" placeholder="Name" v-model.trim="name" required :disabled="loading">
        <input type="email" placeholder="Email address" v-model.trim="email" required :disabled="loading">
        <input type="text" placeholder="Subject" v-model.trim="subject" required :disabled="loading">
        <textarea cols="50" rows="10" placeholder="Write your message here" v-model.trim="message" required :disabled="loading"></textarea>
        <button type="submit" :disabled="loading">{{ loading ? 'Sending…' : 'Send message' }}</button>
      </form>
    </section>

    <MainFooter />
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
form.submitted input:invalid,
form.submitted select:invalid,
form.submitted textarea:invalid {
  border: 2px solid var(--form-no-valid);
  outline: none;
  box-shadow: 0 0 4px var(--form-no-valid);
  border-radius: 10px;
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

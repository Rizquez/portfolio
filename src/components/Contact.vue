<script setup>
import { ref } from 'vue'
import AlertModal from '@/components/AlertModal.vue'

const email = ref('')
const modalMessage = ref('')
const isModalVisible = ref(false)

const handleModalClose = () => {
   isModalVisible.value = false
}

const validateEmail = (emailString) => {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   return regex.test(emailString)
}

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
   <form @submit.prevent="handleFormSubmit">
      <input type="text" placeholder="Company name / Personal name" required>
      <input type="text" placeholder="Email address" v-model="email" required>
      <textarea name="" id="" cols="50" rows="10" placeholder="Write your message here" required></textarea>
      <button type="submit">Send message</button>
   </form>

   <AlertModal :message="modalMessage" :visible="isModalVisible" @close="handleModalClose"/>
</template>

<style scoped>
form {
   padding-top: 100px;
   max-width: 50%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 15px;
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
</style>

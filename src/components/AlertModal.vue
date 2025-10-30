<script setup>
/**
 * Emits custom events from the component.
 * 
 * @event close - Emitted when the user accepts or closes the component.
 */
const emit = defineEmits(['close'])

/**
 * Properties received by the component. 
 * 
 * @prop {string} message - The message to be displayed to the user.
 * @prop {boolean} visible - Indicates whether the component should be displayed or not.
 */
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    required: true
  }
})

/**
 * Handles the user's action when accepting, triggering the ‘close’ event.
 */
const handleAccept = () => {
  emit('close')
}
</script>

<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <p>{{ message }}</p>
      <button @click="handleAccept">Accept</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  border: 3px solid var(--primary-300);
  background-color: var(--bg-100);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  min-width: 300px;
  max-width: 90%;
  box-sizing: border-box;
}
.modal p {
  padding-bottom: 10%;
  font-size: 1.3rem;
  color: var(--text-100);
}
.modal button {
  color: var(--primary-300);
  background-color: var(--primary-100);
  padding: 10px 35px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.3rem;
}
.modal button:hover {
  color: var(--primary-100);
  background-color: var(--primary-300);
}

@media (max-width: 768px) {
  .modal {
    padding: 20px;
    min-width: 260px;
  }
  .modal p {
    font-size: 0.95rem;
  }
  .modal button {
    padding: 10px 25px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .modal {
    padding: 15px;
    min-width: 220px;
  }
  .modal p {
    font-size: 0.9rem;
  }

  .modal button {
    padding: 8px 20px;
    font-size: 0.9rem;
  }
}
</style>
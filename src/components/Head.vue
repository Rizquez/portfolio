<script setup>

</script>

<template>
  <header>
    <div>
      <img src="@/assets/images/svg/code-thinking.svg" alt="code-thinking">
    </div>

    <div class="routers">
      <router-link :to="{ name: 'home'}" class="router">Home</router-link>
      <router-link :to="{ name: 'about', params: { url: 'about' }}" class="router">About</router-link>
      <router-link :to="{ name: 'portfolio', params: { url: 'portfolio' }}" class="router">Portfolio</router-link>
      <router-link :to="{ name: 'contact', params: { url: 'contact' }}" class="router">Contact</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  align-items: center;
  flex-wrap: wrap;
}
header img {
  max-width: 150px;
  max-height: auto;
}

.routers {
  display: flex;
  gap: 2rem;
}

.router {
  text-decoration: none;
  font-weight: lighter;
  color: var(--text-100);
  font-size: 1.3rem;
  cursor: pointer;
}
.router:hover {
  color: var(--primary-100);
}

@media (max-width: 1000px) {
  header {
    padding: 30px 60px;
  }
  header img {
    max-width: 130px;
  }

  .router {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  header {
    padding: 20px 40px;
    flex-direction: column;
    gap: 20px;
  }
  header img {
    max-width: 120px;
  }

  .routers {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  header {
    padding: 15px 20px;
    gap: 15px;
  }
  header img {
    max-width: 100px;
  }

  .router {
    font-size: 0.95rem;
  }
}
</style>
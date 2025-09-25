<template>
  <footer>
    <div class="info">
      <router-link :to="{name: 'privacy', params: { url: 'privacy-policy' }}" class="router">Privacy policy</router-link>
      <p>© 2025 · Pedro Rizquez</p>
    </div>
    <div class="rrss">
      <a href="https://github.com/Rizquez" target="_blank"><img src="@/assets/images/svg/github.svg" alt="github"></a>
      <a href="https://www.linkedin.com/in/pedro-rizquez/" target="_blank"><img src="@/assets/images/svg/linkedin.svg" alt="linkedin"></a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 50px 100px 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
}
footer img {
  max-width: 40px;
}
footer p {
  font-weight: lighter;
  color: var(--text-100);
  font-size: 1.3rem;
  margin: 0;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rrss {
  display: flex;
  gap: 0.5rem;
  align-items: end;
}

.router {
  text-decoration: none;
  font-weight: lighter;
  color: var(--text-100);
  font-size: 1.3rem;
}
.router:hover {
  color: var(--primary-100);
}

@media (max-width: 768px) {
  footer {
    padding: 30px 40px 20px 40px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .info {
    align-items: center;
  }

  .rrss {
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 480px) {
  footer {
    padding: 25px 20px 15px 20px;
    gap: 1.5rem;
  }
  footer img {
    max-width: 30px;
  }

  .router, .info p {
    font-size: 0.9rem;
  }
}
</style>
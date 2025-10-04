<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <main class="page">
    <MainHeader />

    <section class="page-content about-me">
      <h1>About me</h1>
      <p>I am a software developer passionate about solving complex problems and transforming ideas into solutions that truly add value. I am motivated by curiosity and continuous learning, always looking for new ways to optimize processes and make technology more accessible and useful for people. I firmly believe that every project is an opportunity to grow as a professional and, at the same time, to contribute positively to the environment in which it is applied.</p>
      <p>I currently work as a <span>Senior Software Developer at LETSMEP</span>, where I lead the development of automated solutions and cloud infrastructure management with <span>Azure</span> and <span>Autodesk Platform Services (Forge)</span>. My experience includes implementing CI/CD pipelines, designing custom tools to optimize technical processes, and coordinating cross-functional teams. Previously, I was a <span>Python Developer at JSS Efficient Engineering</span>, where I focused on creating tools to improve operational efficiency through automation and custom reporting.</p>
      <p>My stack integrates <span>backend</span>, <span>frontend</span>, and <span>database</span> technologies, with expertise in <span>Python</span>, <span>.NET</span> (C#), <span>Vue.js</span> (JavaScript), <span>Angular</span> (TypeScript), <span>SQL</span>, <span>Azure</span>, and <span>Docker</span>. My approach focuses on building efficient, scalable, and sustainable solutions, always applying best practices in software development and architecture.</p>
      <p>My background combines areas of artificial intelligence, data science, and software development:</p>
      <ul>
        <li>Artificial Intelligence – Tokyo School (In progress)</li>
        <li>Big Data & Business Intelligence – Universidad Isabel I (2025)</li>
        <li>Multiplatform Application Development – iFP (2025)</li>
        <li>Data Scientist – Universitat Oberta de Catalunya (2023)</li>
        <li>Python Programmer – Tokyo School (2022)</li>
      </ul>
      <p>In addition, I hold certifications such as <span>Introduction to Artificial Intelligence (CS50AI, Harvard)</span>, which reinforces my commitment to continuous learning and the ethical application of technology.</p>
      <p>Beyond my professional experience, I have developed projects that reflect my interest in creating solutions with real impact:</p>
      <ul>
        <li><span>Jummy:</span> Plataforma digital para la hosteleria que transforma la interaccion entre restaurantes y clientes. Incluye gestion de menus digitales, pedidos en tiempo real y un sistema de pagos seguro.</li>
        <li><span>EcoBalance:</span> Herramienta para calcular la captura de CO<sub>2</sub> de especies arboreas y recomendar planes de plantacion para mitigar emisiones.</li>
      </ul>
      <p>These projects have allowed me to apply modern technologies such as <span>Flask</span>, <span>Vue.js</span>, <span>MySQL</span>, <span>Auth0</span>, <span>Render</span> and <span>Clever Cloud</span>, combining technical innovation with solutions applicable to everyday life.</p>
      <h2>Pedro Rizquez</h2>
      <h3>Passionate about building efficient solutions through code</h3>
    </section>

    <MainFooter />
  </main>
</template>

<style scoped>
.about-me {
  padding: 0px 300px;
}

p, li {
  font-size: 1.3rem;
  color: var(--text-100);
  text-align: justify;
  font-weight: lighter;
}

ul li::marker {
  color: var(--text-100);
}

h1, h2 {
  color: var(--primary-100);
}

h1 {
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
}

h2 {
  font-weight: lighter;
  font-size: 1.8rem;
  text-align: right;
}

h3 {
  font-size: 1.4rem;
  font-style: oblique;
  color: var(--primary-200);
  text-align: right;
  font-weight: lighter;
}

span {
  font-weight: 500;
}

@media (max-width: 1600px) {
  .about-me {
    padding: 0px 200px;
  }
}

@media (max-width: 1200px) {
  .about-me {
    padding: 0px 80px;
  }
}

@media (max-width: 768px) {
  .about-me {
    padding: 0px 30px;
  }

  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p, li {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .policy {
    padding: 0px 30px;
  }

  h1 {
    font-size: 2.1rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1rem;
  }

  p, li {
    font-size: 0.9rem;
  }
}
</style>
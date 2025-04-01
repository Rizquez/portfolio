<script setup>
import { onMounted, nextTick } from 'vue'

// Componentes de layout
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'

/**
 * Al montar la vista:
 * - Revisa si hay un ID de seccion almacenado en sessionStorage (scrollToSection).
 * - Si existe, espera al proximo ciclo del DOM (`nextTick`).
 * - Intenta hacer scroll suave hacia ese elemento.
 * - Si aun no esta en el DOM, intenta hacerlo cada 100ms hasta que aparezca (maximo 3 segundos).
 */
onMounted(async () => {
  const sectionId = sessionStorage.getItem('scrollToSection')
  if (sectionId) {
    await nextTick()
    const el = document.getElementById(sectionId)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      sessionStorage.removeItem('scrollToSection')
    } else {
      // Si el elemento aun no existe, intenta localizarlo periodicamente
      const tryScroll = setInterval(() => {
        const retryEl = document.getElementById(sectionId)
        if (retryEl) {
          retryEl.scrollIntoView({ behavior: 'smooth' })
          sessionStorage.removeItem('scrollToSection')
          clearInterval(tryScroll)
        }
      }, 100)

      // Detiene el intento despues de 3 segundos si no se encuentra el elemento
      setTimeout(() => clearInterval(tryScroll), 3000)
    }
  }
})
</script>

<template>
  <main>
    <Head/>
    
    <section id="home" class="home">
      <div class="greetings">
        <div>
          <h2>Hi, There!</h2>
          <h1>I'm Pedro Rizquez</h1>
          <p>Passionate about building efficient solutions through code.</p>
        </div>
        <div>
          <img src="@/assets/images/freelancer.svg" alt="freelancer">
        </div>
      </div>
    </section>
    <section id="about" class="about">
      <div>
        <img src="@/assets/images/vibe-coding.svg" alt="vibe-coding">
      </div>
      <div class="experience">
        <h2>About me</h2>
        <p class="txt">I am a software developer with more than two years of experience in process automation, backend development and cloud infrastructure management. I currently work as Lead Developer at LETSMEP, where I lead the development of custom solutions using technologies such as Python, C#, Docker, Microsoft Azure and Autodesk Platform Services.</p>
        <p class="txt">My work focuses on the creation of tools oriented to operational efficiency, cloud services integration and CI/CD pipelines implementation. I have experience in collaborative environments, cloud infrastructure management and development of robust backend services.</p>
        <p class="txt">I have a specialised background in artificial intelligence, big data and cross-platform development, which allows me to approach projects from a complete technical perspective, combining programming, automation and data analysis.</p>
        <p class="slogan">Code that optimises, solutions that transform.</p>
      </div>
    </section>
    <section id="projects" class="projects">
      <h2>Projects</h2>
      <div class="cards">
        <div>
          <h4>Jummy</h4>
          <img src="@/assets/images/Jummy.png" alt="jummy">
          <p>App to digitise the restaurant experience, allowing customers to browse menus, manage orders and pay from their mobile. It optimises restaurant operations and improves the user experience.</p>
          <p><span>Technologies:</span> Python, SQL, JavaScript, HTML, CSS, Auth0, Netlify, Render, Clever Cloud.</p>
          <p class="note"><span>Note:</span> You will need credentials to access, please request them in case you want to test the application.</p>
          <a href="https://jummy-ifp.netlify.app/" target="_blank">Browse to Jummy ></a>
        </div>
        <div>
          <h4>EcoBalance</h4>
          <img src="@/assets/images/EcoBalance.png" alt="ecobalance">
          <p>Interface to calculate and analyse CO<sub>2</sub> sequestration by tree species, promoting sustainable solutions to climate change.</p>
          <p><span>Technologies:</span> Python, SQL, JavaScript, HTML, CSS, Render, Clever Cloud.</p>
          <p class="note"><span>Note:</span> The service may take a couple of seconds to load the first time as the server must be up if it is not active.</p>
          <a href="https://karla-project.onrender.com/" target="_blank">Browse to EcoBalance ></a>
        </div>
      </div>
    </section>
    
    <Footer/>
  </main>
</template>

<style scoped>
.home {
  padding: 100px;
}
.greetings {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
.greetings img {
  max-width: 500px;
}
.greetings h1 {
  font-size: var(--h1-font);
  color: var(--accent-100);
}
.greetings h2 {
  font-size: var(--h2-font);
  color: var(--accent-100);
}
.greetings p {
  font-size: var(--p-font);
  font-style: oblique;
  color: var(--primary-200);
}

.about {
  padding: 100px;
  display: flex;
  flex-direction: row;
  gap: 10rem;
}
.about img {
  max-width: 500px;
}
.about .txt {
  color: var(--accent-100);
  text-align: justify;
  font-size: var(--p-font);
  font-weight: lighter;
}
.experience h2 {
  color: var(--accent-100);
  font-size: var(--h2-font);
  margin-top: 0;
}
.experience .slogan {
  font-style: oblique;
  text-align: right;
  padding-top: 60px;
  margin-bottom: 0;
  color: var(--primary-200);
  font-size: var(--p-font);
}

.projects {
  padding: 100px;
}
.projects h2 {
  color: var(--accent-100);
  font-size: var(--h2-font);
  margin-top: 0;
  padding-bottom: 50px;
  text-align: center;
}
.projects .cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.cards > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--primary-100);
  border-radius: 50px;
  padding: 30px;
  max-width: 500px;
}
.cards p, a {
  text-align: justify;
  font-size: var(--mini-font);
  color: var(--accent-100);
  font-weight: lighter;
}
.cards a {
  text-align: right;
  padding-top: 20px;
  text-decoration: none;
  font-size: var(--mini-font);
  color: var(--primary-100);
  font-weight: lighter;
}
.cards h4 {
  color: var(--accent-100);
  font-size: var(--h4-font);
  text-align: center;
}
.cards span {
  font-weight: bold;
}
.cards img {
  width: 500px;
}
.cards .note {
  font-style: oblique;
}
</style>
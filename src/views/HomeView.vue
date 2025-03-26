<script setup>
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
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
      <div class="me">
        <div>
          <img src="@/assets/images/vibe-coding.svg" alt="vibe-coding">
        </div>
        <div class="experience">
          <h2>About me</h2>
          <p>I am a software developer with experience in process automation, web development and cloud infrastructure management.</p>
          <p>I currently work as a lead developer at LETSMEP, where I lead custom solutions using technologies such as Python, C#, Azure and Docker.</p>
          <p>I have specialised training in artificial intelligence, big data and cross-platform development, and I am always looking for new challenges to boost my professional growth.</p>
          <p>I specialize as a Backend and Cloud Developer, with a focus on automation, artificial intelligence and DevOps, where I have more than 2 years of experience in the sector.</p>
          <p class="slogan">Code that optimises, solutions that transform.</p>
        </div>
      </div>
    </section>

    <!-- <section id="projects" class="projects">
      <h2>Projects</h2>
      <div>
        <div>
          <h4>Jummy</h4>
          <p>App to digitise the restaurant experience, allowing customers to browse menus, manage orders and pay from their mobile. It optimises restaurant operations and improves the user experience.</p>
          <p><span>Technologies:</span> Python, SQL, JavaScript, HTML, CSS, Auth0, Netlify, Render, Clever Cloud.</p>
          <p><span>Note:</span> You will need credentials to access, please request them in case you want to test the application.</p>
          <div>
            <a href="https://karla-project.onrender.com/" target="_blank">Deployment</a>
            <a href="https://github.com/Rizquez/eco_balance" target="_blank">Repository</a>
          </div>
        </div>
        <div>
          <h4>EcoBalance</h4>
          <p>Interface to calculate and analyse CO<sub>2</sub> sequestration by tree species, promoting sustainable solutions to climate change.</p>
          <p><span>Technologies:</span> Python, SQL, JavaScript, HTML, CSS, Render, Clever Cloud.</p>
          <p><span>Note:</span> The service may take a couple of seconds to load the first time as the server must be up if it is not active.</p>
          <div>
            <a href="https://jummy-ifp.netlify.app/" target="_blank">Deployment</a>
            <a href="https://github.com/Rizquez/Jummy" target="_blank">Repository</a>
          </div>
        </div>
      </div>
    </section> -->
    
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
}
.about img {
  max-width: 500px;
}
.about p {
  color: var(--accent-100);
  text-align: justify;
  font-size: var(--p-font);
}
.about .me {
  display: flex;
  flex-direction: row;
  gap: 200px;
}

.experience h2 {
  color: var(--accent-100);
  font-size: var(--h2-font);
  margin-top: 0;
}
.experience .slogan {
  font-style: oblique;
  text-align: right;
  padding-top: 80px;
  margin-bottom: 0;
}

.projects {
  padding: 100px;
}
</style>
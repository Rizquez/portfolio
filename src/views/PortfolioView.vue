<script setup>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import Project from '@/components/Project.vue';

import jummyImg from '@/assets/images/png/Jummy.png';
import ecoBalanceImg from '@/assets/images/png/EcoBalance.png';

/**
 * Object containing Jummy project information.
 * 
 * @property {string} title        Project name.
 * @property {string} imgSrc       Path or import of the representative image.
 * @property {string} imgAlt       Alternative text for the image (accessibility).
 * @property {string} description  General description of the project.
 * @property {string} technologies Technologies used in the project.
 * @property {string} note         Explanatory note or project status.
 * @property {string} linkLabel    Text of the link to access the resource.
 * @property {string} linkHref     URL of the external resource (e.g., repository).
 */
const jummy = {
  title: 'Jummy',
  imgSrc: jummyImg,
  imgAlt: 'Jummy app logo',
  description: 'App to digitise the restaurant experience, allowing customers to browse menus, manage orders and pay from their mobile. It optimises restaurant operations and improves the user experience.',
  technologies: 'Python, SQL, JavaScript, HTML, CSS, Auth0, Netlify, Render, Clever Cloud.',
  note: 'This project has been archived.',
  linkLabel: 'Browse the repository',
  linkHref: 'https://github.com/Rizquez/Jummy'
}

/**
 * Object containing EcoBalance project information.
 * 
 * @property {string} title        Project name.
 * @property {string} imgSrc       Path or import of the representative image.
 * @property {string} imgAlt       Alternative text for the image (accessibility).
 * @property {string} description  General description of the project.
 * @property {string} technologies Technologies used in the project.
 * @property {string} note         Explanatory note or project status.
 * @property {string} linkLabel    Text of the link to access the resource.
 * @property {string} linkHref     URL of the external resource (e.g., repository).
 */
const ecoBalance = {
  title: 'EcoBalance',
  imgSrc: ecoBalanceImg,
  imgAlt: 'EcoBalance app logo',
  description: 'Application for calculating and analyzing CO2 capture by tree species to offset the excessive presence of this gas in the atmosphere. The tool provides detailed analyses of how different plant and tree species can be used to mitigate these emissions, with the option to download a report in Excel format with the results obtained.',
  technologies: 'Python, SQL, JavaScript, HTML, CSS, Render, Clever Cloud.',
  note: 'This project has been archived.',
  linkLabel: 'Browse the repository',
  linkHref: 'https://github.com/Rizquez/eco_balance'
}
</script>

<template>
  <main>
    <MainHeader />

    <section>
      <h1>Portfolio</h1>
      <div class="projects">
        <Project v-bind="jummy" />
        <Project v-bind="ecoBalance" />
      </div>
    </section>

    <MainFooter />
  </main>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: var(--primary-100);
}

.projects {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 50px 0px;
}

@media (max-width: 1000px) {
  .projects {
    padding: 40px 60px;
  }

  h1 {
    font-size: 2.3rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 30px 40px;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .projects {
    padding: 20px;
  }

  h1 {
    font-size: 1.8rem;
  }
}
</style>
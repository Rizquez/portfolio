<script setup>
/**
 * Props of the ProjectItem component.
 * 
 * @prop {string} title        Project title to be displayed in an <h4>.
 * @prop {string} imgSrc       Path or import of the project image.
 * @prop {string} imgAlt       Alternative text for the image (accessibility).
 * @prop {string} description  Main description of the project.
 * @prop {string} technologies Text with the list of technologies used in the project.
 * @prop {string} note         Additional note, such as project status or clarifications.
 * @prop {string} linkLabel    Text to be displayed in the link (e.g., "Browse the repository").
 * @prop {string} linkHref     URL of the external link (e.g., repository, demo, etc.).
 */
const props = defineProps({
  title: { type: String, required: true },
  imgSrc: { type: String, required: true },
  imgAlt: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: String, required: true},
  note: { type: String, required: true },
  linkLabel: { type: String, required: true },
  linkHref: { type: String, required: true } 
})
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <img class="cover" :src="imgSrc" :alt="imgAlt || title">
    <p>{{ description }}</p>
    <p><span>Technologies:</span> {{ technologies }}</p>
    <p class="note"><span>Note:</span> {{ note }}</p>
    <a :href="linkHref" target="_blank" rel="noopener noreferrer">{{ linkLabel }} <span class="icon-mask" aria-hidden="true"></span></a>
  </div>
</template>

<style scoped>
div {
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--primary-100);
  border-radius: 50px;
  padding: 30px;
  max-width: 500px;
}

h4 {
  color: var(--accent-100);
  font-size: 1.5rem;
  text-align: center;
}

p, a {
  font-size: 1rem;
  font-weight: lighter;
}

p {
  text-align: justify;
  color: var(--accent-100);
}

a {
  text-align: right;
  padding-top: 20px;
  text-decoration: none;
  color: var(--primary-100);
}
a:hover,
.ext-link:hover {
  color: var(--primary-200);
}

span {
  font-weight: bold;
}

.cover {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.note {
  font-style: oblique;
}

.ext-link{
  text-align: right;
  padding-top: 20px;
  text-decoration: none;
  color: var(--primary-100);
  display: inline-flex;
  align-items: baseline;
  gap: .35em;
  line-height: 1.4;
}

.icon-mask {
  width: 1em;
  height: 1em;
  background-color: currentColor;
  -webkit-mask: url('@/assets/images/svg/open-in.svg') no-repeat center / contain;
  mask: url('@/assets/images/svg/open-in.svg') no-repeat center / contain;
  vertical-align: -0.2em;
  display: inline-block;
  flex: 0 0 auto;
}

@media (max-width: 1000px) {
  h4 {
    font-size: 1.3rem;
  }

  p, a {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  h4 {
    font-size: 1.2rem;
  }

  p, a {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  h4 {
    font-size: 1.1rem;
  }

  p, a {
    font-size: 0.85rem;
  }
}
</style>
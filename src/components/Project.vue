<script setup>

/**
 * Props del componente ProjectItem.
 * 
 * @prop {string} title        Titulo del proyecto que se mostrara en un <h4>.
 * @prop {string} imgSrc       Ruta o import de la imagen del proyecto.
 * @prop {string} imgAlt       Texto alternativo para la imagen (accesibilidad).
 * @prop {string} description  Descripcion principal del proyecto.
 * @prop {string} technologies Texto con la lista de tecnologias usadas en el proyecto.
 * @prop {string} note         Nota adicional, como estado del proyecto o aclaraciones.
 * @prop {string} linkLabel    Texto que se mostrara en el enlace (ej: "Browse the repository").
 * @prop {string} linkHref     URL del enlace externo (ej: repositorio, demo, etc).
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
    <img :src="imgSrc" :alt="imgAlt || title">
    <p>{{ description }}</p>
    <p><span>Technologies:</span> {{ technologies }}</p>
    <p class="note"><span>Note:</span> {{ note }}</p>
    <a :href="linkHref" target="_blank" rel="noopener noreferrer">{{ linkLabel }}</a>
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

img {
  width: 100%;
  max-width: 500px;
  height: auto;
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
a:hover {
  color: var(--primary-200);
}

span {
  font-weight: bold;
}

.note {
  font-style: oblique;
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
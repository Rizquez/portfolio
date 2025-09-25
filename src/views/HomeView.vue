<script setup>
import Head from '@/components/Head.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <main class="page">
    <Head />
    
    <section class="page-content home">
      <h1>Hi! I'm Pedro Rizquez</h1>
      <h2>Software developer specializing in Python, Azure, and automation</h2>
      <h3>I design and build efficient solutions that simplify processes and generate real impact</h3>
      <h4>Code that optimises, solutions that transform</h4>
    </section>

    <Footer />
  </main>
</template>

<style scoped>

.home {
  padding: 100px;
}

h1, h2 {
  color: var(--primary-100);
}

h3, h4 {
  color: var(--primary-100);
}

h1 {
  font-weight: 500;
  font-size: 2.5rem;
}

h2, h3, h4 {
  font-weight: lighter;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1rem;
  font-style: oblique;
}

@media (max-width: 1000px) {
  .home {
    padding: 80px;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 60px;
  }

  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .home {
    padding: 40px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.8rem;
  }
}
</style>
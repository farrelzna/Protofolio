<template>
  <div>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Journey />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Journey from '../components/Journey.vue'
import Footer from '../components/Footer.vue'

onMounted(() => {
  // Add smooth scrolling behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Initialize intersection observer for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px' // No margin
  })

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
}

/* Smooth section transitions */
section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Optional: Add smooth transition between sections */
.section-transition {
  transition: all 0.5s ease-in-out;
}

/* Ensure content doesn't jump during transitions */
main {
  overflow-x: hidden;
}

/* Optional: Add different transition delays for children elements */
.visible .fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

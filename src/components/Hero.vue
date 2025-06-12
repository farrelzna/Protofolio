<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="container mx-auto px-4 text-center relative z-10">
      <h1 ref="splitTextRef" class="text-6xl md:text-8xl font-bold mb-6">
        <span class="word">
          <span class="char">H</span>
          <span class="char">e</span>
          <span class="char">l</span>
          <span class="char">l</span>
          <span class="char">o</span>
          <span class="char">,</span>
        </span>
        <span class="word ml-4">
          <span class="char">I</span>
          <span class="char">'</span>
          <span class="char">m</span>
        </span>
        <span class="word ml-4">
          <span class="text-gradient">
            <span class="char">D</span>
            <span class="char">e</span>
            <span class="char">v</span>
            <span class="char">e</span>
            <span class="char">l</span>
            <span class="char">o</span>
            <span class="char">p</span>
            <span class="char">e</span>
            <span class="char">r</span>
          </span>
        </span>
      </h1>
      <p 
        class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Crafting digital experiences through clean code and minimalist design
      </p>
      <div 
        class="space-x-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a 
          href="#about" 
          class="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all"
        >
          My Story
        </a>
        <a 
          href="#contact" 
          class="inline-block px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all"
        >
          Get in Touch
        </a>
      </div>
    </div>
    
    <!-- Minimalist background shapes -->
    <div class="absolute inset-0 -z-10">
      <div class="rellax absolute top-20 left-20 w-64 h-64 rounded-full bg-gray-100" data-rellax-speed="2"></div>
      <div class="rellax absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gray-50" data-rellax-speed="1"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const splitTextRef = ref(null)

onMounted(() => {
  // Animate each character
  const chars = splitTextRef.value.querySelectorAll('.char')
  
  gsap.set(chars, {
    y: 100,
    opacity: 0
  })
  
  gsap.to(chars, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.03,
    ease: "back.out(1.7)"
  })
})
</script>

<style scoped>
.word {
  display: inline-block;
  overflow: hidden;
}

.char {
  display: inline-block;
  transform-origin: bottom;
}

/* ...existing styles... */
</style>

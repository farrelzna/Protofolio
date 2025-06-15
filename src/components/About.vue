<template>
  <section id="about" class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <!-- Introduction Section -->
        <div 
          class="mb-16 text-center"
          data-aos="fade-up"
        >
          <div class="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
            <img 
              :src="profileImage" 
              alt="Profile" 
              class="w-full h-full object-cover"
            >
          </div>
          <h3 class="text-3xl font-semibold mb-4">
            Hi, I'm <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Farrel Izzan Maulana</span>
          </h3>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            A passionate student developer currently exploring the exciting world of web development. 
            I'm particularly enthusiastic about JavaScript and modern frameworks like React and Vue.js.
          </p>
          <div class="flex justify-center gap-4 mb-8">
            <a href="https://github.com/farrelzna" target="_blank" class="text-gray-600 hover:text-primary transition-colors">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/farrelzna" target="_blank" class="text-gray-600 hover:text-primary transition-colors">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" class="text-gray-600 hover:text-primary transition-colors">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

        <div class="space-y-16">
          <!-- Current Journey -->
          <div
            class="story-block"
            data-aos="fade-up"
          >
            <h3 class="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">My Journey</h3>
            <p class="story-text">
              As a student at SMK Wikrama Bogor, I discovered my passion for web development. 
              What started as curiosity about creating websites has evolved into a deep interest 
              in JavaScript and its modern frameworks. I'm currently focused on mastering React and Vue.js.
            </p>
          </div>

          <!-- Learning Focus -->
          <div
            class="story-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 class="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What I'm Learning</h3>
            <p class="story-text">
              I'm diving deep into modern web development, with a special focus on JavaScript ecosystems. 
              Through hands-on projects and continuous learning, I'm building experience with React, Vue.js, 
              and essential front-end tools. Every day is an opportunity to learn something new!
            </p>
          </div>

          <!-- Aspirations -->
          <div
            class="story-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 class="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">My Goals</h3>
            <p class="story-text">
              I aspire to become a skilled front-end developer, creating engaging web experiences that people love. 
              While still in school, I'm working on various projects to build my portfolio and improve my skills. 
              I'm excited about the possibility of contributing to interesting web projects in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile.jpg'
</script>

<style scoped>
.story-text {
  color: rgb(75, 85, 99);
  font-size: 1.125rem;
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #2D2D2D, #A8A8A8);
}
</style>

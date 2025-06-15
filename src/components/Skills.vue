<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 
        class="text-4xl md:text-5xl font-bold mb-16 text-center"
        data-aos="fade-up"
      >
        Technical Skills
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Frontend Development -->
        <div 
          class="bg-white p-8 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 class="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Frontend Development</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">React.js</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Vue.js</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">HTML5 & CSS3</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Tailwind CSS</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Responsive Design</span>
            </li>
          </ul>
        </div>

        <!-- Database & Backend -->
        <div 
          class="bg-white p-8 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Database & Backend</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">SQL (MySQL)</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">PostgreSQL</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Lumen</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Basic PHP</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">RESTful APIs</span>
            </li>
          </ul>
        </div>

        <!-- Tools & Workflow -->
        <div 
          class="bg-white p-8 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 class="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tools & Workflow</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Git / GitHub / Gitlab</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">VS Code</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">NPM/Yarn</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Figma (Basic)</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-700">Chrome DevTools</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Current Learning -->
      <div 
        class="mt-16 text-center max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 class="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Currently Learning
        </h3>
        <p class="text-gray-600">
          Expanding my frontend expertise with advanced Vue.js concepts, state management with Vuex, 
          and deepening my understanding of modern JavaScript frameworks while maintaining strong database skills.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #2D2D2D, #A8A8A8);
}
</style>

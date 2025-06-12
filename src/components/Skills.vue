<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 
        class="text-4xl md:text-5xl font-bold mb-16 text-center"
        data-aos="fade-up"
      >
        Technical Expertise
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Frontend -->
        <div 
          class="bg-white p-8 rounded-lg shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 class="text-2xl font-semibold mb-6 text-gradient">Frontend</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>HTML & CSS</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>JavaScript/TypeScript</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Vue.js</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Tailwind CSS</span>
            </li>
          </ul>
        </div>

        <!-- Backend -->
        <div 
          class="bg-white p-8 rounded-lg shadow-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-semibold mb-6 text-gradient">Backend</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Node.js</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>PHP</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>MySQL</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>RESTful APIs</span>
            </li>
          </ul>
        </div>

        <!-- Tools -->
        <div 
          class="bg-white p-8 rounded-lg shadow-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 class="text-2xl font-semibold mb-6 text-gradient">Tools</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Git & GitHub</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>VS Code</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Docker</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span>Figma</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>

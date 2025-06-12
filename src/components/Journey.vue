<template>
  <section id="journey" class="py-20">
    <div class="container mx-auto px-4">
      <h2 
        class="text-4xl md:text-5xl font-bold mb-16 text-center"
        data-aos="fade-up"
      >
        My Journey
      </h2>

      <div class="max-w-4xl mx-auto relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200"></div>

        <!-- Timeline items -->
        <div class="space-y-16">
          <!-- Journey Item 1 -->
          <div 
            class="relative flex items-center justify-between"
            data-aos="fade-up"
          >
            <div class="w-5/12 pr-8 text-right">
              <h3 class="text-xl font-semibold mb-2 text-gradient">2023 - Present</h3>
              <h4 class="text-lg font-medium mb-2">Senior Developer</h4>
              <p class="text-gray-600">Leading development teams and architecting scalable solutions</p>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <div class="w-5/12 pl-8"></div>
          </div>

          <!-- Journey Item 2 -->
          <div 
            class="relative flex items-center justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="w-5/12 pr-8"></div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <div class="w-5/12 pl-8">
              <h3 class="text-xl font-semibold mb-2 text-gradient">2021 - 2023</h3>
              <h4 class="text-lg font-medium mb-2">Full Stack Developer</h4>
              <p class="text-gray-600">Building robust web applications and mentoring junior developers</p>
            </div>
          </div>

          <!-- Journey Item 3 -->
          <div 
            class="relative flex items-center justify-between"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="w-5/12 pr-8 text-right">
              <h3 class="text-xl font-semibold mb-2 text-gradient">2019 - 2021</h3>
              <h4 class="text-lg font-medium mb-2">Frontend Developer</h4>
              <p class="text-gray-600">Crafting beautiful and responsive user interfaces</p>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <div class="w-5/12 pl-8"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>

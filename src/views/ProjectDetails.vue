<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Back Button -->
      <div class="mb-8">
        <button 
          @click="$router.back()" 
          class="inline-flex items-center text-gray-600 hover:text-primary transition-colors group"
        >
          <svg 
            class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </button>
      </div>

      <!-- Project Content -->
      <div v-if="project" class="max-w-4xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Project Image -->
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-96 object-cover"
          >

          <!-- Project Info -->
          <div class="p-8">
            <h1 class="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {{ project.title }}
            </h1>
            <p class="text-gray-600 text-lg mb-6">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-3">Technologies Used</h2>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-6" v-if="project.features">
              <h2 class="text-xl font-semibold mb-3">Key Features</h2>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li v-for="feature in project.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Project Link -->
            <a 
              :href="project.link" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all group"
            >
              View Project
              <svg 
                class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center text-gray-600">
        Loading project details...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import kopiKita from '../assets/images/kopikita.png'
import libraTack from '../assets/images/libratrack.png'
import quickTix from '../assets/images/quicktix.png'
import weatherForecast from '../assets/images/wearherforecast.png'

const route = useRoute()
const project = ref(null)

// Project data
const projectsData = {
  1: {
    id: 1,
    title: 'LibraTrack',
    description: 'Library management system with features for book tracking, member management, and lending operations. This comprehensive system helps libraries digitize their operations and improve efficiency.',
    image: libraTack,
    technologies: ['React.js', 'Node.js', 'MySQL', 'Express'],
    link: 'https://github.com/yourusername/libratrack',
    features: [
      'User-friendly member management system',
      'Real-time book tracking and availability status',
      'Automated lending and return process',
      'Advanced search and filtering capabilities',
      'Reports and analytics dashboard'
    ]
  },
  2: {
    id: 2,
    title: 'QuickTix',
    description: 'Online ticket booking platform for events and movies with real-time seat selection. A modern solution for hassle-free ticket booking with an intuitive user interface.',
    image: quickTix,
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/yourusername/quicktix',
    features: [
      'Interactive seat selection interface',
      'Real-time availability updates',
      'Secure payment integration',
      'E-ticket generation and management',
      'Event scheduling and management'
    ]
  },
  3: {
    id: 3,
    title: 'Weather Forecast App',
    description: 'Real-time weather forecast application with interactive maps and detailed weather information. Stay informed about weather conditions with accurate and timely updates.',
    image: weatherForecast,
    technologies: ['Vue.js', 'OpenWeather API', 'Tailwind CSS', 'Charts.js'],
    link: 'https://github.com/yourusername/weather-forecast',
    features: [
      'Real-time weather updates',
      'Interactive weather maps',
      'Detailed forecast analytics',
      'Location-based weather tracking',
      'Weather alerts and notifications'
    ]
  },
  4: {
    id: 4,
    title: 'KopiKita',
    description: 'A modern coffee shop management system with inventory tracking and order processing capabilities. Streamline your coffee shop operations with this comprehensive management solution.',
    image: kopiKita,
    technologies: ['Vue.js', 'Tailwind CSS', 'MySQL', 'PHP'],
    link: 'https://github.com/yourusername/kopikita',
    features: [
      'Point of Sale (POS) system',
      'Inventory management',
      'Sales and revenue tracking',
      'Employee management',
      'Customer loyalty program'
    ]
  }
}

onMounted(() => {
  const projectId = parseInt(route.params.id)
  project.value = projectsData[projectId]
  
  // If project not found, redirect to projects page
  if (!project.value) {
    router.push('/projects')
  }
})
</script>

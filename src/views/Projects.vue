<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Back Button -->
    <div class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
      <button @click="$router.back()" 
              class="inline-flex items-center px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 shadow-md hover:shadow-lg">
        <i class="fas fa-arrow-left mr-2"></i>
        Kembali
      </button>
    </div>

    <!-- Language Proficiency Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Language Proficiency
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="lang in languages" :key="lang.name" 
               class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
               data-aos="fade-up">
            <div class="flex items-center mb-4">
              <i :class="lang.icon" class="text-3xl mr-4"></i>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ lang.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ lang.level }}</p>
              </div>
            </div>
            <div class="mt-4">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-primary-600">
                      {{ lang.proficiency }}%
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 text-xs flex rounded bg-primary-200">
                  <div :style="{ width: lang.proficiency + '%' }"
                       class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-1000">
                  </div>
                </div>
              </div>
              <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">{{ lang.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Tech Stack
        </h2>
        <div class="space-y-12">
          <div v-for="category in techStack" :key="category.name" 
               class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
               data-aos="fade-up">
            <div class="flex items-center mb-6">
              <i :class="category.icon" class="text-2xl mr-4 text-primary-500"></i>
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ category.name }}</h3>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div v-for="item in category.items" :key="item.name"
                   class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300">
                <i :class="item.icon" class="text-3xl mb-2"></i>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white text-center">{{ item.name }}</h4>
                <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ item.level }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.title"
               class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
               data-aos="fade-up">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
                <span class="px-2 py-1 text-xs rounded-full" 
                      :class="project.status === 'Production' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ project.status }}
                </span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
              <div class="mb-4">
                <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Features:</h4>
                <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                  <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech"
                      class="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-full">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.link" target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center text-primary-600 hover:text-primary-700">
                <span>View Project</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// AOS initialization
onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  })
})

const languages = [
  {
    name: 'JavaScript/TypeScript',
    level: 'Advanced',
    proficiency: 90,
    icon: 'devicon-javascript-plain',
    description: 'Expert in modern ES6+, TypeScript, and async programming'
  },
  {
    name: 'PHP',
    level: 'Intermediate',
    proficiency: 75,
    icon: 'devicon-php-plain',
    description: 'Experienced in Laravel and WordPress development'
  },
  {
    name: 'Python',
    level: 'Intermediate',
    proficiency: 70,
    icon: 'devicon-python-plain',
    description: 'Proficient in data analysis and automation'
  },
  {
    name: 'Java',
    level: 'Intermediate',
    proficiency: 65,
    icon: 'devicon-java-plain',
    description: 'Android development and enterprise applications'
  },
  {
    name: 'C#',
    level: 'Basic',
    proficiency: 50,
    icon: 'devicon-csharp-plain',
    description: '.NET development and Unity game programming'
  },
  {
    name: 'Kotlin',
    level: 'Basic',
    proficiency: 45,
    icon: 'devicon-kotlin-plain',
    description: 'Modern Android app development'
  }
]

const techStack = [
  {
    name: 'Frontend Development',
    icon: 'fas fa-laptop-code',
    items: [
      { name: 'Vue.js', level: 'Advanced', icon: 'devicon-vuejs-plain colored' },
      { name: 'React', level: 'Intermediate', icon: 'devicon-react-original colored' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'SASS/SCSS', level: 'Advanced', icon: 'devicon-sass-original colored' },
      { name: 'Next.js', level: 'Intermediate', icon: 'devicon-nextjs-original' }
    ]
  },
  {
    name: 'Backend Development',
    icon: 'fas fa-server',
    items: [
      { name: 'Node.js', level: 'Advanced', icon: 'devicon-nodejs-plain colored' },
      { name: 'Laravel', level: 'Intermediate', icon: 'devicon-laravel-plain colored' },
      { name: 'Express', level: 'Advanced', icon: 'devicon-express-original' },
      { name: 'MySQL', level: 'Intermediate', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', level: 'Intermediate', icon: 'devicon-mongodb-plain colored' }
    ]
  },
  {
    name: 'Development Tools',
    icon: 'fas fa-tools',
    items: [
      { name: 'Git', level: 'Advanced', icon: 'devicon-git-plain colored' },
      { name: 'Docker', level: 'Intermediate', icon: 'devicon-docker-plain colored' },
      { name: 'VS Code', level: 'Advanced', icon: 'devicon-vscode-plain colored' },
      { name: 'Figma', level: 'Intermediate', icon: 'devicon-figma-plain colored' },
      { name: 'Jenkins', level: 'Basic', icon: 'devicon-jenkins-plain colored' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: 'fas fa-cloud',
    items: [
      { name: 'AWS', level: 'Intermediate', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'Firebase', level: 'Advanced', icon: 'devicon-firebase-plain colored' },
      { name: 'Google Cloud', level: 'Basic', icon: 'devicon-googlecloud-plain colored' },
      { name: 'Nginx', level: 'Intermediate', icon: 'devicon-nginx-original colored' },
      { name: 'GitHub Actions', level: 'Intermediate', icon: 'devicon-github-original colored' }
    ]
  }
]

const projects = [
  {
    title: 'AI-Powered Learning Platform',
    description: 'An innovative e-learning platform that uses AI to personalize learning paths and provide intelligent recommendations for students.',
    image: 'https://source.unsplash.com/random/600x400?education',
    link: 'https://github.com/username/e-learning',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'TensorFlow'],
    features: ['Adaptive Learning', 'Real-time Progress Tracking', 'Interactive Quizzes'],
    status: 'Production'
  },
  {
    title: 'Neural Art Generator',
    description: 'State-of-the-art AI image generation platform using GANs to create unique artistic compositions from text descriptions.',
    image: 'https://source.unsplash.com/random/600x400?ai',
    link: 'https://github.com/username/ai-image-gen',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
    features: ['Text-to-Image', 'Style Transfer', 'Batch Processing'],
    status: 'Beta'
  },
  {
    title: 'Enterprise Chat Platform',
    description: 'Secure, scalable real-time communication platform for enterprises with end-to-end encryption and file sharing capabilities.',
    image: 'https://source.unsplash.com/random/600x400?chat',
    link: 'https://github.com/username/chat-app',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
    features: ['E2E Encryption', 'File Sharing', 'Video Calls'],
    status: 'Production'
  },
  {
    title: 'FinTech Analytics Dashboard',
    description: 'Comprehensive financial analytics platform with real-time market data, predictive analytics, and portfolio management tools.',
    image: 'https://source.unsplash.com/random/600x400?finance',
    link: 'https://github.com/username/finance-dash',
    technologies: ['Vue.js', 'D3.js', 'Firebase', 'Python'],
    features: ['Real-time Analytics', 'Portfolio Tracking', 'AI Predictions'],
    status: 'Beta'
  }
]
</script>

<style scoped>
.text-primary-500 { color: #3B82F6; }
.text-primary-600 { color: #2563EB; }
.text-primary-700 { color: #1D4ED8; }
.bg-primary-100 { background-color: #DBEAFE; }
.bg-primary-200 { background-color: #BFDBFE; }
.bg-primary-500 { background-color: #3B82F6; }

/* Progress bar animation */
@keyframes progress {
  0% { width: 0; }
  100% { width: v-bind('proficiency + "%"'); }
}

.progress-bar {
  animation: progress 1.5s ease-in-out;
}
</style>

<template>
    <section id="projects" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    data-aos="fade-up">
                    Featured Projects
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    A selection of my recent works and personal projects
                </p>
            </div>

            <!-- Featured Projects Grid -->
            <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12 w-full max-w-6xl mx-auto">
                <div v-for="(project, index) in featuredProjects" :key="project.id"
                    class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                    data-aos="fade-up" :data-aos-delay="index * 100">
                    <div class="relative overflow-hidden group h-48">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div
                            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <router-link :to="{ name: 'project-details', params: { id: project.id } }"
                                class="px-6 py-2 bg-primary text-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                View Details
                            </router-link>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                        <p class="text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                                class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                {{ tech }}
                            </span>
                            <span v-if="project.technologies.length > 3" class="px-3 py-1 text-gray-400 text-sm">
                                +{{ project.technologies.length - 3 }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- See More Button -->
            <div class="text-center" data-aos="fade-up" data-aos-delay="400">
                <a href="https://github.com/farrelzna?tab=repositories"
                    target="_blank"
                    class="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all group">
                    See All Projects
                    <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import kopiKita from '../assets/images/kopikita.png'
import libraTack from '../assets/images/libratrack.png'
import quickTix from '../assets/images/quicktix.png'
import weatherForecast from '../assets/images/wearherforecast.png'

const featuredProjects = [
    {
        id: 1,
        title: 'LibraTrack',
        description: 'Library management system with features for book tracking, member management, and lending operations.',
        image: libraTack,
        technologies: ['React.js', 'Node.js', 'MySQL', 'Express'],
        link: 'https://github.com/yourusername/libratrack'
    },
    {
        id: 2,
        title: 'QuickTix',
        description: 'Online ticket booking platform for events and movies with real-time seat selection.',
        image: quickTix,
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
        link: 'https://github.com/yourusername/quicktix'
    },
    {
        id: 3,
        title: 'Weather Forecast App',
        description: 'Real-time weather forecast application with interactive maps and detailed weather information.',
        image: weatherForecast,
        technologies: ['Vue.js', 'OpenWeather API', 'Tailwind CSS', 'Charts.js'],
        link: 'https://github.com/yourusername/weather-forecast'
    },
    {
        id: 4,
        title: 'KopiKita',
        description: 'A modern coffee shop management system with inventory tracking and order processing capabilities.',
        image: kopiKita,
        technologies: ['Vue.js', 'Tailwind CSS', 'MySQL', 'PHP'],
        link: 'https://github.com/yourusername/kopikita'
    },
]
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
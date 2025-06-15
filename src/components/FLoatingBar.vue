<template>
    <div v-if="!isProjectsPage" class="fixed left-6 top-1 -translate-y-1/2 z-50" data-aos="fade-right"
        data-aos-duration="1000">
        <div class="flex flex-col items-center">
            <!-- Navigation Links -->
            <div class="flex flex-col space-y-6">
                <!-- Line at top -->
                <div class="w-[1px] h-24 bg-gray-300 mx-auto"></div>

                <!-- Nav Links -->
                <a href="#home"
                    class="text-gray-600 hover:text-primary transform hover:-translate-x-1 transition-all duration-300 writing-mode-vertical">
                    Home
                </a>

                <a href="#about"
                    class="text-gray-600 hover:text-primary transform hover:-translate-x-1 transition-all duration-300 writing-mode-vertical">
                    About
                </a>

                <a href="#skills"
                    class="text-gray-600 hover:text-primary transform hover:-translate-x-1 transition-all duration-300 writing-mode-vertical">
                    Skills
                </a>

                <a href="#projects"
                    class="text-gray-600 hover:text-primary transform hover:-translate-x-1 transition-all duration-300 writing-mode-vertical">
                    Projects
                </a>

                <a href="#journey"
                    class="text-gray-600 hover:text-primary transform hover:-translate-x-1 transition-all duration-300 writing-mode-vertical">
                    Journey
                </a>

                <a href="#contact"
                    class="text-gray-600 hover:text-primary transform hover:-translate-x-1 transition-all duration-300 writing-mode-vertical">
                    Contact
                </a>

                <!-- Line at bottom -->
                <div class="w-[1px] h-24 bg-gray-300 mx-auto"></div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.writing-mode-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    padding: 0.5rem 0;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    font-weight: 500;
}
</style>
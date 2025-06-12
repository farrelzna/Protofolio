import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Rellax from 'rellax'

// Initialize AOS with custom settings for minimal animations
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 50,
    delay: 100,
})

// Create Vue app instance
const app = createApp(App)

// Add Rellax as a global property
app.config.globalProperties.$rellax = Rellax

// Use router and mount the app
app.use(router)
app.mount('#app')

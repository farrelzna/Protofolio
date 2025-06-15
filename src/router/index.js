import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  {
    path: '/projects/:id',
    name: 'project-details',
    component: ProjectDetails,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

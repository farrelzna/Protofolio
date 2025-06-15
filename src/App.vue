<template>
  <main class="min-h-screen bg-secondary">
    <FloatingBar />

    <div class="">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import FloatingBar from './components/FLoatingBar.vue'

onMounted(() => {
  // Initialize Rellax for parallax effects
  new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
})
</script>

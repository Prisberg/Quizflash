<script setup lang="ts">
import '~/assets/css/style.css'

useSeoMeta({
  title: 'QuizFlash',
  ogTitle: 'QuizFlash',
  description: 'This is QuizFlash, a quick-input flashcard app.',
  ogDescription: 'This is QuizFlash, a quick-input flashcard app.',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})
</script>


<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

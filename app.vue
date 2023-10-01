<template >
  <div id="bodyDiv" class='invert min-h-screen'>
    <header class="flex py-2 justify-around items-center w-full">
      <NuxtLink class="flex items-center" to="/">
        <h1 class="whitespace-nowrap underline">Quiz<span class="italic">Flash</span>
        </h1>
        <img class="w-10 h-10 lg:w-12 lg:h-12" type="image" src="./assets/image/favicon.png" alt="icon">
      </NuxtLink>
      <nav class="flex">
        <button type="button" aria-label="Toggle color mode" class="text-4xl" @click="toggleMode">
          <span v-if="bright">◉</span>
          <span v-else>◎</span>
        </button>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/style.css'
const bright = ref(false)

useSeoMeta({
  title: 'QuizFlash',
  ogTitle: 'QuizFlash',
  description: 'This is QuizFlash, a quick-input flashcard app.',
  ogDescription: 'This is QuizFlash, a quick-input flashcard app.',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

function toggleMode() {
  const bodyDiv = document.getElementById('bodyDiv')
  bright.value = !bright.value
  if (bodyDiv?.classList.contains("invert")) {
    bodyDiv.classList.remove("invert")
  } else {
    bodyDiv?.classList.add("invert")
  }
}

</script>

<style>
#bodyDiv {
  color: black;
  background-color: rgb(255, 245, 231);
  transition: filter ease 500ms;
}

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


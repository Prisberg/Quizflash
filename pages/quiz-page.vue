<script setup lang="ts">
// Add more quizzes here
import { quizData } from "../util/mockedData.js";
let data = quizData
</script>

<template>
    <div>
        <h1 class="whitespace-nowrap">Quiz page</h1>
        <div class="flex flex-col justify-center content-center flex-wrap h-full w-full">
            <p v-if="data">{{ data[0] }}</p>
            <p v-else>Loading data...</p>
            <p>Toggle flashcard</p>
            <p>Next flashcard</p>
            <p>Previous flashcard</p>
            <NuxtLink to="/">Home page</NuxtLink>
        </div>
    </div>
</template>
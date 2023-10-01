<template>
    <div>
        <div class="flex flex-col justify-center content-center items-center flex-wrap h-full w-full gap-4 p-8">
            <h3>{{ selectedQuiz.title }}</h3>
            <div @click="e => toggleCard(e)" class="flip-card" v-for="questions, index in selectedQuiz.questions"
                :key="index">
                <div class="flip-card-inner rounded">
                    <div class="flip-card-front flex justify-center items-center rounded bg-orange-50">
                        <p>{{ questions.question }}</p>
                    </div>
                    <div class="flip-card-back flex justify-center items-center rounded bg-orange-100">
                        <p>{{ questions.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.flip-card {
    width: 300px;
    height: 300px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}


.flip-card-transform {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    padding: 1rem;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>

<script setup lang="ts">
import { useQuizzes } from '../../composables/index';
const route = useRoute();
const quizzes = useQuizzes();
const selectedQuiz = quizzes.value.filter(quiz => quiz.id === route.params.id)[0];

function toggleCard(e: MouseEvent) {
    let target = e.currentTarget as Element
    let element = target.querySelector('.flip-card-inner')
    if (element) {
        if (element.classList.contains('flip-card-transform')) {
            element.classList.remove('flip-card-transform')
        } else {
            element.classList.add('flip-card-transform')
        }
    }
}
</script>
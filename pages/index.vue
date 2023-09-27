<script setup lang="ts">
let textValue: string;
let quizTitle: string;

function createQuiz(title: string, quiz: string) {
    console.log(title, quiz);
    // save quiz to localstorage, needs unique id.
    // localStorage.setItem(title, quiz);
};
</script>
<template>
    <div>
        <h1 class="whitespace-nowrap">Home</h1>
        <div class="flex flex-col justify-center gap-4 content-center flex-wrap h-full w-full">
            <p>Start/select quiz (stored and fetched from localstorage)</p>
            <p>Delete quiz (remove from localstorage)</p>
            <p>Create quiz (Always visible input)</p>
            <form class="flex justify-between" @submit.prevent="createQuiz(quizTitle, textValue)">
                <div class="gap-4 flex flex-col">
                    <div class="flex flex-col">
                        <label for="quizTitle">Quiz title</label>
                        <input name="quizTitle" type="text" class="outline rounded flex justify-between"
                            v-model="quizTitle">
                    </div>
                    <div class="flex flex-col">
                        <label for="quizContent">Quiz content</label>
                        <textarea name="quizContent" v-model="textValue" id="quizCreator" cols="30" rows="10"
                            class="outline rounded">
                        </textarea>
                    </div>
                </div>
                <div>
                    <button class="px-4 p-2 bg-teal-400 rounded" type="submit">Create quiz</button>
                </div>
            </form>
            <NuxtLink class="" to="/quiz-page">Quiz page</NuxtLink>
        </div>
    </div>
</template>
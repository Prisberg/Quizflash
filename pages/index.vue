<script setup lang="ts">
import { quizData } from "../util/mockedData.js";
let quizzes: any;
let textValue: string;
let quizTitle: string;

onMounted(() => {
    // 1. I need to fetch quizzes from localstorage and display them
    let unparsedQuizzes = localStorage.getItem("Quizzes")
    if (unparsedQuizzes) {
        quizzes = JSON.parse(unparsedQuizzes);
        console.log(quizzes);
        return quizzes
    } else {
        console.log("No quizzes");
        return
    }
})

// 2. When a user creates a quiz I need to attach it to the end of the currently existing quiz object.

function createQuiz(title: string, quiz: string) {
    const newQuiz = [
        {
            id: () => { quizzes ? quizzes.length++ : 1 },
            title: title,
            questions:
            {

            }
        }]

    const lines = quiz.split('\n');

    // Initialize an array to store the flashcard objects.
    const flashcards = [];

    // Iterate through the lines and extract questions and answers.
    let currentFlashcard = { question: '', answer: '' };

    for (const line of lines) {
        if (line.startsWith('Question:')) {
            // Extract the question text.
            currentFlashcard.question = line.slice('Question:'.length);
        } else if (line.startsWith('Answer:')) {
            // Extract the answer text and push the current flashcard.
            currentFlashcard.answer = line.slice('Answer:'.length);
            flashcards.push(currentFlashcard);

            // Reset the current flashcard.
            currentFlashcard = { question: '', answer: '' };
        }
    }

    console.log(flashcards);

    // let quizzes = localStorage.getItem("Quizzes");
    // if (quizzes === null) {
    //     localStorage.setItem("Quizzes", "")
    // } else {
    //     console.log(quizzes);
    // }
    // const stringified = JSON.stringify(quizData);
    // localStorage.setItem("Quizzes", stringified)
    // console.log(stringified);
    // console.log(JSON.parse(stringified));
};
</script>

<template>
    <div>
        <h1 class="whitespace-nowrap">Home</h1>
        <div class="flex flex-col justify-center gap-4 content-center flex-wrap h-full w-full">
            <div class="w-4/5 md:w-7/12 max-w-md flex flex-col gap-4 justify-center p-2">
                <p>
                    For personal use I made this quick flashcard app where one can simply write questions (specifically
                    "Question:") followed by answers (specifically "Answer:") in order to create a quiz. Make sure to use a
                    new line to seperate questions and answers.
                </p>
                <p>
                    Give your quiz a title and then write as many questions (with a corresponding amount of answers) as
                    you'd
                    like your quiz to have. Or why not ask ChatGPT to make the questions in the correct format and then
                    simply copy + paste!
                </p>
                <div v-if="quizzes">
                    <p v-for="(quiz, index) in quizzes" :key="index">{{ quiz.title }} </p>
                </div>
                <p v-else>There are currently no stored quizzes in this browser.</p>
            </div>
            <form class="flex justify-between shadow-lg p-8 flex-wrap gap-4 flex-col"
                @submit.prevent="createQuiz(quizTitle, textValue)">
                <div class="flex flex-col">
                    <label for="quizTitle">Quiz title</label>
                    <input placeholder='The funny guy' required minlength="3" maxlength="25" name="quizTitle" type="text"
                        class="outline rounded flex justify-between" v-model="quizTitle">
                </div>
                <div class="flex flex-col">
                    <label for="quizContent">Quiz content</label>
                    <textarea required minlength="10" name="quizContent" v-model="textValue" id="quizCreator" cols="30"
                        rows="10" class="outline rounded"
                        placeholder="Question: How many programmers does it take to screw in a lightbuld?&#10;Answer: None, that' s a hardware problem.">
                        </textarea>
                </div>
                <button class="px-4 p-2 bg-teal-400 rounded" type="submit">Create quiz</button>
            </form>
            <NuxtLink class="" to="/quiz-page">Quiz page</NuxtLink>
        </div>
    </div>
</template>
<template>
    <div>
        <div class="flex flex-col justify-center gap-4 content-center flex-wrap h-full w-full">
            <div class="flex flex-col gap-4 justify-center w-full max-w-md p-4">
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
                <div>
                    <h3 class="text-center">Your quizzes:</h3>
                    <ul class="flex flex-col gap-2 text-lg">
                        <li v-for="(quiz, index) in quizzes" :key="index">
                            <div v-if="quiz.id" class="flex gap-4 justify-end">
                                <NuxtLink class="hover:font-bold" :to="'/quiz/' + quiz.id">
                                    {{ quiz.title }}
                                </NuxtLink>
                                <button type="button" @click="removeQuiz(quiz.id)">❌</button>
                            </div>
                            <p v-else>
                                There are currently no quizzes stored on this browser
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <form class="flex justify-between shadow-lg p-8 flex-wrap gap-4 flex-col"
                @submit.prevent="createQuiz(quizTitle, textValue)">
                <div class="flex flex-col">
                    <label for="quizTitle">Quiz title</label>
                    <input placeholder='The funny guy' required minlength="3" maxlength="25" name="quizTitle" type="text"
                        class="outline outline-1 rounded flex justify-between p-2" v-model="quizTitle">
                </div>
                <div class="flex flex-col">
                    <label for="quizContent">Quiz content</label>
                    <textarea required minlength="10" name="quizContent" v-model="textValue" id="quizCreator" cols="30"
                        rows="10" class="outline outline-1 rounded p-2"
                        placeholder="Question: How many programmers does it take to screw in a lightbuld?&#10;Answer: None, that' s a hardware problem.">
                        </textarea>
                </div>
                <button class="px-4 p-2 bg-lime-300 rounded hover:bg-lime-400 hover:ease-in duration-150" type="submit">
                    Create quiz
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { uuid } from 'vue-uuid';
import { useQuizzes } from '../composables/index';

// Lesson learned: If you want to render data in the DOM the variable needs to be reactive in order for the DOM to get updated when the variable does.
const quizzes = useQuizzes();
let unparsedQuizzes: string | null;
let textValue: string;
let quizTitle: string;

onMounted(() => {
    unparsedQuizzes = localStorage.getItem("Quizzes")
    if (unparsedQuizzes) {
        quizzes.value = JSON.parse(unparsedQuizzes);
        return quizzes
    }
})

function removeQuiz(idToRemove: string) {
    let indexToRemove = quizzes.value.findIndex(item => item.id === idToRemove);
    if (indexToRemove !== -1) {
        // Use splice to remove the item from the array
        quizzes.value.splice(indexToRemove, 1);
        const stringifiedQuizzes = JSON.stringify(quizzes.value);
        localStorage.setItem("Quizzes", stringifiedQuizzes)
    } else {
        console.log("Quiz with id " + idToRemove + " not found.");
    }
}

function createQuiz(title: string, quiz: string) {
    const lines = quiz.split('\n');
    // Initialize an array to store the flashcard objects.
    const flashcards = [];
    let currentFlashcard = { question: '', answer: '' };

    // Iterate through the lines and extract questions and answers.
    for (const line of lines) {
        if (line.startsWith('Question: ')) {
            // Extract the question text.
            currentFlashcard.question = line.slice('Question: '.length);
        } else if (line.startsWith('Answer: ')) {
            // Extract the answer text and push the current flashcard.
            currentFlashcard.answer = line.slice('Answer: '.length);
            flashcards.push(currentFlashcard);

            // Reset the current flashcard.
            currentFlashcard = { question: '', answer: '' };
        }
    }

    const newQuiz = {
        id: uuid.v4(),
        title: title,
        questions: flashcards
    }

    unparsedQuizzes = localStorage.getItem("Quizzes")
    if (unparsedQuizzes === null) {
        const stringifiedQuiz = JSON.stringify([newQuiz]);
        localStorage.setItem("Quizzes", stringifiedQuiz)
        quizzes.value.push(newQuiz);
    } else {
        let freshQuizzes = JSON.parse(unparsedQuizzes)
        freshQuizzes.push(newQuiz)
        const stringifiedQuizzes = JSON.stringify(freshQuizzes);
        localStorage.setItem("Quizzes", stringifiedQuizzes)
        quizzes.value = freshQuizzes;
    }
};

</script>../composables/states.js
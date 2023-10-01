<template>
    <div>
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
                <ul>
                    <li v-for="(quiz, index) in quizzes" :key="index">
                        <NuxtLink v-if="quiz" :to="'/quiz-page/' + quiz.id">
                            <!-- @vue-expect-error -->
                            {{ quiz.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <form class="flex justify-between shadow-lg p-8 flex-wrap gap-4 flex-col"
                @submit.prevent="createQuiz(quizTitle, textValue)">
                <div class="flex flex-col">
                    <label for="quizTitle">Quiz title</label>
                    <input placeholder='The funny guy' required minlength="3" maxlength="25" name="quizTitle" type="text"
                        class="outline rounded flex justify-between p-2" v-model="quizTitle">
                </div>
                <div class="flex flex-col">
                    <label for="quizContent">Quiz content</label>
                    <textarea required minlength="10" name="quizContent" v-model="textValue" id="quizCreator" cols="30"
                        rows="10" class="outline rounded p-2"
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

// Lesson learned: If you want to render data in the DOM the variable needs to be reactive in order for the DOM to get updated when the variable does.
let quizzes = ref({
    id: null,
    title: "There are currently no quizzes stored on this browser",
    questions: null
});
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
    } else {
        let freshQuizzes = JSON.parse(unparsedQuizzes)
        freshQuizzes.push(newQuiz)
        quizzes.value = freshQuizzes;
        const stringifiedQuizzes = JSON.stringify(freshQuizzes);
        localStorage.setItem("Quizzes", stringifiedQuizzes)
    }
};

</script>
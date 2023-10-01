import { useState } from "nuxt/app";

export const useQuizzes = () => {
    return useState('quizzes', () => ([{
        id: null,
        title: "There are currently no quizzes stored on this browser",
        questions: null
    }]));
}
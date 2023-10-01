import { useState } from "nuxt/app";

export const useQuizzes = () => {
    return useState('quizzes', () => ([{
        id: "",
        title: "",
        questions: [{
            question: "",
            answer: ""
        }]
    }]));
}
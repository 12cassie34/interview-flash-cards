import { defineStore } from 'pinia';

import { Question } from '../types/types';

import { setLocalStorage } from "../functions/setAndGetLocalStorage";
import { addOrRemoveAQuestion } from "../functions/addOrRemoveAQuetion";

export const favoriteQuestionsStore = defineStore('favoriteQuestionsStore', {
    state: () => {
        return {
            favoriteQuestions: [] as Question[],
        }
    },
    actions: {
        initializeQuestions(questions: Question[]) {
            this.favoriteQuestions = questions;
        },
        toggleLikedQuestion(question: Question) {
            this.favoriteQuestions = addOrRemoveAQuestion(question, this.favoriteQuestions);
            setLocalStorage('likedQuestions', this.favoriteQuestions);
        },
    },
})
import { defineStore } from 'pinia';

import { Question } from '../types/types';

import { setLocalStorage } from "../functions/setAndGetLocalStorage";

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
            const isExisted: boolean = this.favoriteQuestions.includes(question);
            if (isExisted) {
                this.favoriteQuestions = this.favoriteQuestions.filter(item => item.question !== question.question);
            } else {
                this.favoriteQuestions.push(question);
            }
            setLocalStorage('likedQuestions', this.favoriteQuestions);
        },
    },
})
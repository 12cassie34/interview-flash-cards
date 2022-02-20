import { defineStore } from 'pinia';

import { Question } from '../types/types';

export const favoriteQuestionsStore = defineStore('favoriteQuestionsStore', {
    state: () => {
        return {
            favoriteQuestions: [] as Question[],
        }
    },
    actions: {
        toggleLikedQuestion(question: Question) {
            this.favoriteQuestions.push(question);
        },
        removeLikedQuestion(question: Question) {
            this.favoriteQuestions = this.favoriteQuestions.filter(item => item.question !== question.question);
        }
    },
})
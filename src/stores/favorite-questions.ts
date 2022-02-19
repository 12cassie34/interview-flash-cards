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
            // question.liked = true;
            this.favoriteQuestions.push(question);
        },
        removeLikedQuestion(question: Question) {
            // question.liked = false;
            this.favoriteQuestions = this.favoriteQuestions.filter(item => item.question !== question.question);
        }
    },
})
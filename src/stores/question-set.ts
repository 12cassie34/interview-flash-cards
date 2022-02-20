import { defineStore } from 'pinia';

import { favoriteQuestionsStore } from './favorite-questions';
import { unfamiliarQuestionsStore } from './unfamiliar-questions';

import { Question } from '../types/types';

import commonQuestions from "../json/common-questions.json";
import htmlQuestions from "../json/html-questions.json";
import cssQuestions from "../json/css-questions.json";
import jsQuestions from "../json/js-questions.json";

export const questionSetStore = defineStore('questionSetStore', {
    state: () => {
        return {
            questions: commonQuestions,
            currentQuestion: commonQuestions[0] as Question,
            hasFinished: false,
            
        }
    },
    actions: {
        setQuestionSet(topicId: string) {
            const favoriteQuestions = favoriteQuestionsStore();
            const unfamiliarQuestions = unfamiliarQuestionsStore();

            const questionSetMap = Object.create(null, {
                "01": { value: [...commonQuestions, ...htmlQuestions, ...cssQuestions, ...jsQuestions] },
                "02": { value: commonQuestions },
                "03": { value: htmlQuestions },
                "04": { value: cssQuestions },
                "05": { value: jsQuestions },
                "unfamiliar": { value: unfamiliarQuestions.unfamiliarQuestions },
                "liked": { value: favoriteQuestions.favoriteQuestions }
            });
            this.questions = questionSetMap[topicId];
            this.currentQuestion = this.questions[0];
            this.hasFinished = false;
        },
        getRandomQuestion() {
            if (this.questions.length !== 0) {
                const randomIndex = Math.floor(Math.random() * this.questions.length);
                this.currentQuestion = this.questions[randomIndex];
                this.questions = this.questions.filter(item => item.question !== this.currentQuestion.question);
                return;
            }
            if (this.questions.length === 0) {
                this.hasFinished = true;
            }
        }
    },
})
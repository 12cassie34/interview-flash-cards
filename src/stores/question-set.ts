import { defineStore } from 'pinia';

import { Question } from '../types/types';

import commonQuestions from "../json/common-questions.json";
import htmlQuestions from "../json/html-questions.json";
import cssQuestions from "../json/css-questions.json";
import jsQuestions from "../json/js-questions.json";

export const questionSetStore = defineStore('questionSetStore', {
    state: () => {
        return {
            questions: commonQuestions,
            currentQuestion: commonQuestions[0],
            questionsHaveBeenAnswered: [] as Question[],
        }
    },
    actions: {
        setQuestionSet(topicId: string) {
            const questionSetMap = Object.create(null, {
                "01": { value: [...commonQuestions, ...htmlQuestions, ...cssQuestions, ...jsQuestions] },
                "02": { value: commonQuestions },
                "03": { value: htmlQuestions },
                "04": { value: cssQuestions },
                "05": { value: jsQuestions },
            });
            this.questions = questionSetMap[topicId];
            this.currentQuestion = this.questions[0];
        },
        getRandomQuestion() {
            const randomIndex = Math.floor(Math.random() * this.questions.length);
            const hasBeenAnswered = this.questionsHaveBeenAnswered.find(item => item.question === this.questions[randomIndex].question);
            if (!hasBeenAnswered) {
                this.currentQuestion = this.questions[randomIndex];
                this.questionsHaveBeenAnswered.push(this.questions[randomIndex]);
            } else {
                if (this.questionsHaveBeenAnswered.length === this.questions.length) {
                    this.questionsHaveBeenAnswered = [];
                }
                this.getRandomQuestion();
            }
        }
    },
})
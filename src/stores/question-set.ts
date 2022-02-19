import { defineStore } from 'pinia'

import commonQuestions from "../json/common-questions.json";

type Question = {
    question: string;
    liked: boolean;
};

export const questionSetStore = defineStore('questionSetStore', {
    state: () => {
        return {
            questions: commonQuestions,
            currentQuestion: commonQuestions[0],
            questionsHaveBeenAnswered: [] as Question[],
        }
    },
    actions: {
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
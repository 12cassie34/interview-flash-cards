import { defineStore } from "pinia";

import { Question } from "../types/types";

import { setLocalStorage } from "../functions/setAndGetLocalStorage";

export const unfamiliarQuestionsStore = defineStore("unfamiliarQuestionsStore", {
    state: () => {
        return {
            unfamiliarQuestions: [] as Question[],
        }
    },
    actions: {
        initializeQuestions(questions: Question[]) {
            this.unfamiliarQuestions = questions;
        },
        addUnfamiliarQuestion(question: Question) {
            this.unfamiliarQuestions.push(question);
            setLocalStorage('unfamiliarQuestions', this.unfamiliarQuestions);
        },
    },
})
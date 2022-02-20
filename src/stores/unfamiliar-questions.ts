import { defineStore } from "pinia";

import { Question } from "../types/types";

export const unfamiliarQuestionsStore = defineStore("unfamiliarQuestionsStore", {
    state: () => {
        return {
            unfamiliarQuestions: [] as Question[],
        }
    },
    actions: {
        addUnfamiliarQuestion(question: Question) {
            this.unfamiliarQuestions.push(question);
        },
    },
})
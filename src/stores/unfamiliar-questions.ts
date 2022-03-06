import { defineStore } from "pinia";

import { Question } from "../types/types";

import { setLocalStorage } from "../functions/setAndGetLocalStorage";
import { addOrRemoveAQuestion } from "../functions/addOrRemoveAQuetion";

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
        toggleUnfamiliarQuestion(question: Question) {
            this.unfamiliarQuestions = addOrRemoveAQuestion(question, this.unfamiliarQuestions);
            setLocalStorage('unfamiliarQuestions', this.unfamiliarQuestions);
        },
    },
})
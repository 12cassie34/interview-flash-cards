import { defineStore } from 'pinia'

export const currentTopicStore = defineStore('currentTopic', {
    state: () => {
        return {
            currentTopicId: "01",
        }
    },
    actions: {
        changeCurrentTopic(topicId: string) {
            this.currentTopicId = topicId;
        },
    },
})
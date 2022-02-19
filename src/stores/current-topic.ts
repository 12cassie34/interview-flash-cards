import { defineStore } from 'pinia';

export const currentTopicStore = defineStore('currentTopic', {
    state: () => {
        return {
            currentTopicId: "01",
            topicMenu: [
                {
                    id: "01",
                    title: "Mixed All Questions",
                    router: "",
                    isActive: false,
                },
                {
                    id: "02",
                    title: "Common Questions",
                    router: "",
                    isActive: true,
                },
                {
                    id: "03",
                    title: "HTML",
                    router: "",
                    isActive: false,
                },
                {
                    id: "04",
                    title: "CSS",
                    router: "",
                    isActive: false,
                },
                {
                    id: "05",
                    title: "JavaScript",
                    router: "",
                    isActive: false,
                },
            ]
        }
    },
    actions: {
        changeCurrentTopic(topicId: string) {
            this.currentTopicId = topicId;
        },
        changeActiveStatus() {
            this.topicMenu.forEach(item => {
                if(item.id === this.currentTopicId) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
        }
    },
})
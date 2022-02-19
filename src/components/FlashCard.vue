<template>
  <div class="card w-10/12 bg-base-100 shadow-xl image-full">
    <div class="card-body">
      <div class="icon-group w-6">
        <img
          v-if="!currentQuestion.liked"
          class="cursor-pointer"
          src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"
        />
        <img
          v-else
          class="cursor-pointer"
          src="https://img.icons8.com/ios-glyphs/30/000000/filled-like.png"
        />
      </div>

      <h2 class="card-title">{{ cartTitle }}</h2>

      <p class="text-3xl">{{ currentQuestion.question }}</p>
      <div class="justify-end card-actions">
        <button class="btn btn-error">Not so familiar!</button>
        <button @click="getRandomQuestion" class="btn btn-primary">
          Easy to me!
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";

import { currentTopicStore } from "../stores/current-topic";
import { questionSetStore } from "../stores/question-set";

export default defineComponent({
  setup() {
    const topicStore = currentTopicStore();
    const { currentTopicId } = storeToRefs(topicStore);

    const questionSet = questionSetStore();
    const { currentQuestion } = storeToRefs(questionSet);
    const getRandomQuestion = questionSet.getRandomQuestion;
    getRandomQuestion();

    const currentTopicMap = Object.create(null, {
      "01": { value: "Mixed All Questions" },
      "02": { value: "Common Questions" },
      "03": { value: "HTML" },
      "04": { value: "CSS" },
      "05": { value: "JavaScript" },
    });
    const cartTitle = computed(() => currentTopicMap[currentTopicId.value]);

    watch(currentTopicId, () => {
      getRandomQuestion();
    });

    return {
      cartTitle,
      currentQuestion,
      getRandomQuestion,
    };
  },
});
</script>

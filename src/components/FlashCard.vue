<template>
  <div class="card w-10/12 bg-base-100 shadow-xl image-full">
    <div class="card-body">
      <div @click="toggleLikedQuestion()" class="icon-group w-6">
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
      <p>{{ questionsAmount }} / {{ totalQuestionAmount }}</p>
      <h2 class="card-title">{{ cartTitle }}</h2>

      <p class="text-3xl">{{ currentQuestion.question }}</p>
      <div class="justify-end card-actions">
        <button @click="addUnfamiliarQuestion" class="btn btn-error">
          Not so familiar!
        </button>
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
import { favoriteQuestionsStore } from "../stores/favorite-questions";
import { unfamiliarQuestionsStore } from "../stores/unfamiliar-questions";

export default defineComponent({
  setup() {
    const topicStore = currentTopicStore();
    const { currentTopicId } = storeToRefs(topicStore);

    const questionSet = questionSetStore();
    const { currentQuestion, questions, totalQuestionAmount } = storeToRefs(questionSet);
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

    const questionsAmount = computed(() => {
      return totalQuestionAmount.value - questions.value.length;
    });
    console.log(totalQuestionAmount.value)

    const favoriteQuestions = favoriteQuestionsStore();
    const toggleLikedQuestion = () => {
      if (currentQuestion.value.liked) {
        currentQuestion.value.liked = false;
      } else {
        currentQuestion.value.liked = true;
      }
      favoriteQuestions.toggleLikedQuestion(currentQuestion.value);
    };

    const unfamiliarQuestions = unfamiliarQuestionsStore();
    const addUnfamiliarQuestion = () => {
      unfamiliarQuestions.addUnfamiliarQuestion(currentQuestion.value);
      getRandomQuestion();
    };

    watch(currentTopicId, () => {
      getRandomQuestion();
    });

    return {
      cartTitle,
      currentQuestion,
      questionsAmount,
      totalQuestionAmount,
      getRandomQuestion,
      toggleLikedQuestion,
      addUnfamiliarQuestion,
    };
  },
});
</script>

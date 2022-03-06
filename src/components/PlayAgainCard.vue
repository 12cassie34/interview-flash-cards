<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Congrats! <br />
          You have done!
        </h1>
        <p class="py-6">
          Want to do more exercises? <br />Which one would you like to do?
        </p>
        <div class="button-group">
          <button
            v-if="hasUnfamilarQuestions"
            @click="
              setQuestionSet('unfamiliar');
              changeCurrentTopic('unfamiliar');
            "
            class="mr-4 btn btn-primary"
          >
            Unfamiliar Questions
          </button>
          <button
            v-if="hasFavoriteQuestions"
            @click="
              setQuestionSet('liked');
              changeCurrentTopic('liked');
            "
            class="ml-4 btn btn-secondary"
          >
            Liked Questions
          </button>
        </div>
        <p class="py-6 text-sm">Our you can choose another topics.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { currentTopicStore } from "../stores/current-topic";
import { questionSetStore } from "../stores/question-set";
import { favoriteQuestionsStore } from "../stores/favorite-questions";
import { unfamiliarQuestionsStore } from "../stores/unfamiliar-questions";

export default defineComponent({
  setup() {
    const questionSet = questionSetStore();
    const setQuestionSet = questionSet.setQuestionSet;

    const hasFavoriteQuestions = favoriteQuestionsStore().favoriteQuestions
      .length
      ? true
      : false;
    const hasUnfamilarQuestions = unfamiliarQuestionsStore().unfamiliarQuestions
      .length
      ? true
      : false;

    const changeCurrentTopic = currentTopicStore().changeCurrentTopic;

    return {
      setQuestionSet,
      hasFavoriteQuestions,
      hasUnfamilarQuestions,
      changeCurrentTopic,
    };
  },
});
</script>

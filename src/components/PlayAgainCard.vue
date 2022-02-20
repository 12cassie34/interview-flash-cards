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
            @click="setQuestionSet('unfamiliar')"
            class="mr-4 btn btn-primary"
          >
            Unfamiliar Questions
          </button>
          <button
            @click="setQuestionSet('liked')"
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

import { questionSetStore } from "../stores/question-set";

export default defineComponent({
  setup() {
    const questionSet = questionSetStore();
    const setQuestionSet = questionSet.setQuestionSet;

    return { setQuestionSet };
  },
});
</script>

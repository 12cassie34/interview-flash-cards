<template>
  <div class="h-screen drawer w-full rounded">
    <TheDrawer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheDrawer from "./components/TheDrawer.vue";

import { getLocalStorage } from "./functions/setAndGetLocalStorage";

import { favoriteQuestionsStore } from "./stores/favorite-questions";
import { unfamiliarQuestionsStore } from "./stores/unfamiliar-questions";

export default defineComponent({
  components: { TheDrawer },
  setup() {
    const likedQuestions = getLocalStorage("likedQuestions");
    const unfamiliarQuestions = getLocalStorage("unfamiliarQuestions");
    if (likedQuestions) {
      favoriteQuestionsStore().initializeQuestions(likedQuestions);
    }
    if (unfamiliarQuestions) {
      unfamiliarQuestionsStore().initializeQuestions(unfamiliarQuestions);
    }
  },
});
</script>


<style>
</style>

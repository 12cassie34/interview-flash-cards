<template>
  <div class="h-screen drawer drawer-mobile w-full">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col items-center justify-center drawer-content">
      <FlashCard v-if="!hasFinished" />
      <PlayAgainCard v-if="hasFinished" />
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      >
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li
          @click="changeCurrentTopic(item.id)"
          v-for="(item, index) in topicMenu"
          :key="index"
        >
          <button
            class="btn btn-primary"
            :class="{ 'btn-active': item.isActive }"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";

import { currentTopicStore } from "../stores/current-topic";
import { questionSetStore } from "../stores/question-set";

import FlashCard from "./FlashCard.vue";
import PlayAgainCard from "./PlayAgainCard.vue";

export default defineComponent({
  components: { FlashCard, PlayAgainCard },
  setup() {
    const topicStore = currentTopicStore();
    const { currentTopicId, topicMenu } = storeToRefs(topicStore);
    const changeCurrentTopic = topicStore.changeCurrentTopic;
    const changeActiveStatus = topicStore.changeActiveStatus;

    const questionSet = questionSetStore();
    const { hasFinished } = storeToRefs(questionSet);


    watch(currentTopicId, () => {
      changeActiveStatus();
    });

    return { topicMenu, hasFinished, changeCurrentTopic };
  },
});
</script>

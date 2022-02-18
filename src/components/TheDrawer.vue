<template>
  <div class="h-screen drawer drawer-mobile w-full">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col items-center justify-center drawer-content">
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      >
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li
          @click="changeCurrentTopic(item.id)"
          v-for="(item, index) in menu"
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
import { defineComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { currentTopicStore } from "../stores/current-topic";

export default defineComponent({
  setup() {
    const menu = ref([
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
        isActive: false,
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
    ]);

    const topicStore = currentTopicStore();
    const { currentTopicId } = storeToRefs(topicStore);
    const changeCurrentTopic = topicStore.changeCurrentTopic;

    watch(currentTopicId, () => {
      menu.value.forEach((item) => {
        console.log(item);
        if (item.id === currentTopicId.value) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });
    });

    return { menu, changeCurrentTopic };
  },
});
</script>

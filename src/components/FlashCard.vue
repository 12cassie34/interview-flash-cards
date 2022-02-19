<template>
  <div class="card w-10/12 bg-base-100 shadow-xl image-full">
    <figure>
      <img src="https://picsum.photos/400/225" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ cartTitle }}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="justify-end card-actions">
        <button class="btn btn-error">Not so familiar!</button>
        <button class="btn btn-primary">Easy to me!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { storeToRefs } from "pinia";

import { currentTopicStore } from "../stores/current-topic";

export default defineComponent({
  setup() {
    const topicStore = currentTopicStore();
    const { currentTopicId } = storeToRefs(topicStore);

    const currentTopicMap = Object.create(null, {
      "01": { value: "Mixed All Questions" },
      "02": { value: "Common Questions" },
      "03": { value: "HTML" },
      "04": { value: "CSS" },
      "05": { value: "JavaScript" },
    });

    const cartTitle = ref("");
    watch(currentTopicId, () => {
      cartTitle.value = currentTopicMap[currentTopicId.value];
    });

    return {
      cartTitle,
    };
  },
});
</script>

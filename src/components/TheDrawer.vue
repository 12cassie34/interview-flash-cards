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
        <li v-for="(item, index) in menu" :key="index">
            <button class="btn btn-primary">{{ item.title }}</button>
            </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const menu = ref([
      {
        title: "Mixed All Questions",
        router: "",
      },
      {
        title: "Common Questions",
        router: "",
      },
      {
        title: "HTML",
        router: "",
      },
      {
        title: "CSS",
        router: "",
      },
      {
        title: "JavaScript",
        router: "",
      },
    ]);

    return { menu };
  },
});
</script>

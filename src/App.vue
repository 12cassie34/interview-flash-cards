<template>
  <div class="h-screen drawer w-full rounded">
    <TheDrawer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheDrawer from "./components/TheDrawer.vue";

export default defineComponent({
  components: { TheDrawer },
  setup() {
  },
});
</script>


<style>
</style>

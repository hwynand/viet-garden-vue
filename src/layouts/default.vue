<script>
import { RouterLink } from "vue-router";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import TheSideBar from "../components/TheSideBar.vue";

export default {
  components: { RouterLink, TheHeader, TheFooter, TheSideBar },
};
</script>

<template>
  <TheHeader />
  <div class="bg-dark">
    <div class="container">
      <TheSideBar />
      <slot />
    </div>
  </div>
  <TheFooter />
</template>

<style scoped>
.container {
  display: flex;
}
</style>

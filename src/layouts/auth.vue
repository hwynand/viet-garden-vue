<script>
import { RouterLink } from 'vue-router'
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';

export default {
  components: { RouterLink, TheHeader, TheFooter },

}
</script>

<template>
  <TheHeader />
  <slot />
  <TheFooter />
</template>
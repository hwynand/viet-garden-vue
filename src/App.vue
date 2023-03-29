<script>
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'

export default {
  components: { RouterView },
  data() {
    return {
      layout: DefaultLayout,
    }
  }
}
</script>

<template>
  <component :is="layout">
    <RouterView :layout.sync="layout"/>
  </component>
</template>


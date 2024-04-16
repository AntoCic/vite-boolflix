<template>
  <AppHeader />
  <AppMain />

</template>

<script>
import { store } from './store.js';
// import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      store
    }
  },
  methods: {
  },
  mounted() {
  }
}

</script>

<style lang="scss">
@use './assets/scss/partials/_variables.scss' as *;

#app {
  background-color: $bg-main;
  padding: 12px;
  min-height: 100vh;
}
</style>

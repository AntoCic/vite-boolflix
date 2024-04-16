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
      store,
      xx: "Boolflix"
    }
  },
  methods: {
    test() {
      console.log("ciao mondo");
    }

  },
  mounted() {
    this.test();
  }
}

</script>

<style lang="scss">

</style>

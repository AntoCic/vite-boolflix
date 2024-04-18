<template>
  <AppSidebar v-if="isAsideOpen" @toggleAside="toggleAside" @toggleSearch="toggleSearch" />
  <AppHeader @toggleAside="toggleAside" @toggleSearch="toggleSearch" :searchFocus="searchFocus"/>
  <AppMain />
 

</template>

<script>
import { store } from './store.js';
// import axios from 'axios'


import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppSidebar from './components/AppSidebar.vue'
export default {
  components: { AppHeader, AppMain,AppSidebar },
  data() {
    return {
      store,
      searchFocus: true,
      isAsideOpen:false
    }
  },
  methods: {
    toggleAside(){
      this.isAsideOpen = !this.isAsideOpen
    },
    toggleSearch(){
      this.searchFocus = !this.searchFocus
    },
  },
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

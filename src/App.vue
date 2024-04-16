<template>
  <h1>{{ xx }}</h1>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  data() {
    return {
      xx: "Boolflix"
    }
  }, methods: {
    test() {
      console.log("ciao mondo");
    }

  },
  mounted() {
    this.test();
  }
}

</script>

<style lang="scss"></style>

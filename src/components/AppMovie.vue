<template>
  <div class="modal-movie">
    <img :src="imgUrl" class="" alt="img copertina movie">
    <!-- <div class="body">
      <h5 class="title"> {{ title }} </h5>
      <h6 class="subtitle mb-2 text-body-secondary">{{ originalTitle }}</h6>
      <p class="card-text f-noto-emoji">{{ flagToEmoji[language.toUpperCase()] }}</p>
      <span class="text-warning">
        <i class="bi bi-star-fill" v-for="n in numberStar"></i>
        <i class="bi bi-star-half" v-for="n in numberHalfStar"></i>
        <i class="bi bi-star" v-for="n in numberEmptyStar"></i>
      </span>
    </div> -->
  </div>
</template>

<script>
import flagToEmoji from '../assets/flag.json';
import { store } from '../store.js';
export default {
  // props: ['imgUrl', 'title', 'originalTitle', 'language', 'vote'],
  data() {
    return {
      store,
      flagToEmoji,
      numberStar: 0,
      numberHalfStar: 0,
      numberEmptyStar: 0,
    }
  },
  methods: {
    getStar() {
      const n = this.vote / 2
      this.numberStar = Math.trunc(n);
      this.numberHalfStar = Math.round(n - this.numberStar);
      this.numberEmptyStar = 5 - this.numberStar - this.numberHalfStar;
    }
  },
  mounted() {
    // this.getStar();
  }
}

</script>

<style lang="scss" scoped>
.modal-movie {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999;

}
</style>

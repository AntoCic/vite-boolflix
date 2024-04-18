<template>
  <div class="ms_card">
    <img :src="imgUrl" class="card-img-top" alt="img copertina movie">
    <div class="body">
      <h5 class="title"> {{ title }} </h5>
      <!-- <h6 class="ms_-subtitle mb-2 text-body-secondary">{{ originalTitle }}</h6>
      <p class="card-text f-noto-emoji">{{ flagToEmoji[language.toUpperCase()] }}</p> -->
      <span class="text-warning">
        <i class="bi bi-star-fill" v-for="n in numberStar"></i>
        <i class="bi bi-star-half" v-for="n in numberHalfStar"></i>
        <i class="bi bi-star" v-for="n in numberEmptyStar"></i>
      </span>
    </div>
  </div>
</template>

<script>
import flagToEmoji from '../assets/flag.json';

export default {
  props: ['imgUrl', 'title', 'originalTitle', 'language', 'vote'],
  data() {
    return {
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
    this.getStar();
  }
}

</script>

<style lang="scss" scoped>
.ms_card {
  width: 300px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    &:hover+.body{
      bottom: 0;
    }
    height: 100%;
  }
  .body{
    background-color: rgba(#fff, 0.9);
    width: 100%;
    padding: 6px;
    position: absolute;
    left: 0;
    bottom: -300px;
    transition: bottom 0.3s;

    &:hover{
      bottom: 0;
    }
    
    .title{
      font-size: 1.5em;
    }
  }
}
</style>

<template>
  <div class="modal-movie">
    <img :src="imgUrl(currentMovie)" class="coperina" alt="img copertina movie">
    <div class="overlay">
      <!-- button fittizio al momento-->
      <button class="btn btn-outline-light rounded-circle ms_btn-close"><i class="bi bi-x-lg"></i></button>
      
      <div class="body">
      <div class="container ">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <h5 class="title "> {{ currentMovie.title }} </h5>
            <h6 class="blockquote-footer text-end">
              {{ currentMovie.original_title }}
            </h6>
          </div>
          <div class="col-auto mx-3">
            <span class="text-warning stars">
              <i class="bi bi-star-fill" v-for="n in numberStar"></i>
              <i class="bi bi-star-half" v-for="n in numberHalfStar"></i>
              <i class="bi bi-star" v-for="n in numberEmptyStar"></i>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="card-text f-noto-emoji fs-3">
              {{ flagToEmoji[currentMovie.original_language.toUpperCase()] }}
            </span>
          </div>
          <div class="col-12">
            <h2>Plot</h2>
            <p>{{ currentMovie.overview }}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import flagToEmoji from '../assets/flag.json';
import { store } from '../store.js';
export default {
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
      const n = this.currentMovie.vote_average / 2
      this.numberStar = Math.trunc(n);
      this.numberHalfStar = Math.round(n - this.numberStar);
      this.numberEmptyStar = 5 - this.numberStar - this.numberHalfStar;
    },
    imgUrl(obj, size = 'w342') {
      const originPath = 'https://image.tmdb.org/t/p/' + size
      let path = '';
      if (obj.poster_path) {
        path = originPath + obj.poster_path;
      } else if (obj.backdrop_path) {
        path = originPath + obj.backdrop_path;
      } else {
        path = '/src/assets/img/not_found.png'
      }
      return path
    },
  },
  mounted() {
    this.getStar();
  },
  computed: {
    currentMovie() {
      return store.currentMovie
    },
  },
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
  overflow: hidden;

  .ms_btn-close{
    position: absolute;
    top: 0;
    right: 0;
    margin: 16px;
  }


  .coperina {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;

  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.97) 60%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0) 80%);
  }

  .body {
    position: absolute;
    top: 30vh;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;


    .title {
      font-size: 3em;
    }

    .stars {
      font-size: 2em;
    }
  }

}
</style>

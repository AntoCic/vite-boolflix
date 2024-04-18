<template>
  <main>
    <div class="container" v-show="!openMovie">
      <div class="row">

        <div class="col-12 position-relative">
          <h2 class="text-white"><font-awesome-icon :icon="['fas', 'film']" /> Film</h2>
          <p v-if="movies.length === 0" class="text-danger">Nessun film trovato</p>
          <div v-if="movies.length !== 0" ref="eMovie" class="d-flex flex-nowrap overflow-x-auto">
            <button @click="scrollRight($refs.eMovie)" class="ms_btn-scroll right"><i
                class="bi bi-caret-right-fill"></i></button>
            <button @click="scrollLeft($refs.eMovie)" class="ms_btn-scroll left"><i
                class="bi bi-caret-left-fill"></i></button>
            <AppCard class="flex-shrink-0" v-for="movie in movies" @click="setCurrentMovie(movie)"
              :imgUrl="imgUrl(movie)" :title="movie.title" :originalTitle="movie.original_title"
              :language="movie.original_language" :vote="movie.vote_average" />
          </div>
        </div>

        <div class="col-12 position-relative">
          <h2 class="text-white mt-3"><font-awesome-icon :icon="['fas', 'tv']" /> Serie Tv</h2>
          <p v-if="tvSeries.length === 0" class="text-danger">Nessuna serie trovata</p>
          <div v-if="tvSeries.length !== 0" ref="eTvSeries" class="d-flex flex-nowrap overflow-x-auto">
            <button @click="scrollRight($refs.eTvSeries)" class="ms_btn-scroll right"><i
                class="bi bi-caret-right-fill"></i></button>
            <button @click="scrollLeft($refs.eTvSeries)" class="ms_btn-scroll left"><i
                class="bi bi-caret-left-fill"></i></button>
            <AppCard class="flex-shrink-0" v-for="movie in tvSeries" @click="setCurrentMovie(movie)"
              :imgUrl="imgUrl(movie)" :title="movie.title" :originalTitle="movie.original_title"
              :language="movie.original_language" :vote="movie.vote_average" />
          </div>
        </div>
      </div>
    </div>
    <AppMovie @click="openMovie = !openMovie" v-if="openMovie" />
  </main>
</template>

<script>
import { store } from '../store.js';
import flagToEmoji from '../assets/flag.json';


import AppCard from './AppCard.vue'
import AppMovie from './AppMovie.vue'
export default {
  components: { AppCard, AppMovie },
  data() {
    return {
      store,
      flagToEmoji,
      openMovie: false,
    }
  },
  methods: {
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
    setCurrentMovie(obj) {
      store.currentMovie = obj
      this.openMovie = !this.openMovie
    },
    scrollRight(e) {
      e.scrollLeft += 300;
    },
    scrollLeft(e) {
      e.scrollLeft -= 300;
    },
  },
  computed: {
    movies() {
      return store.movieSearched.results
    },
    tvSeries() {
      return store.tvSeriesSearched.results
    }
  },
  mounted() {

  }


}

</script>

<style lang="scss" scoped>
.ms_btn-scroll {
  position: absolute;
  background: rgb(255, 255, 255);

  z-index: 1;
  border: none;
  font-size: 50px;
  height: 450px;
  bottom: 0px;

  &.left {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0) 100%);
    padding-right: 30px;
  }

  &.right {
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0) 100%);
    padding-left: 30px;
    right: 0;
  }

  &:hover {
    color: gray;
    background: rgb(255, 255, 255);
  }
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
  user-select: none
}
</style>

<template>
  <main>
    <div class="container">
      <div v-show="!openMovie" class="row row-cols-3">
        <div class="col" v-for="movie in movies">
          <AppCard @click="setCurrentMovie(movie)" :imgUrl="imgUrl(movie)" :title="movie.title"
            :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" />
        </div>

        <div class="col" v-for="movie in tvSeries">
          <AppCard @click="setCurrentMovie(movie)" :imgUrl="imgUrl(movie)" :title="movie.title"
            :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" />
        </div>
      </div>
    </div>
  </main>
  <AppMovie @click="openMovie = !openMovie" v-if="openMovie" />
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

<style lang="scss" scoped></style>

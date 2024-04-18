<template>
  <main>
    <div class="container">
      <div class="row row-cols-3">

        <div class="col" v-for="movie in movies">
          <AppCard :imgUrl="imgUrl(movie)" :title="movie.title" :originalTitle="movie.original_title"
            :language="movie.original_language" :vote="movie.vote_average" />
        </div>

        <div class="col" v-for="tvSerie in tvSeries">
          <AppCard :imgUrl="imgUrl(tvSerie)" :title="tvSerie.name" :originalTitle="tvSerie.original_name"
            :language="tvSerie.original_language" :vote="tvSerie.vote_average" />
        </div>

      </div>
    </div>
  </main>

</template>

<script>
import { store } from '../store.js';
import flagToEmoji from '../assets/flag.json';


import AppCard from './AppCard.vue'
export default {
  components: { AppCard },
  data() {
    return {
      store,
      flagToEmoji
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
  },
  computed: {
    movies() {
      return store.movieSearched.results
    },
    tvSeries() {
      return store.tvSeriesSearched.results
    }
  },


}

</script>

<style lang="scss" scoped></style>

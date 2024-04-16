<template>
  <main>
    <div class="container">
      <div class="row row-cols-3">

        <div class="col" v-for="movie in movies">
          <div class="card">
            <img :src="imgUrl(movie.poster_path)" class="card-img-top" alt="img copertina movie">
            <div class="card-body">
              <h5 class="card-title"> {{ movie.title }} </h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">{{ movie.original_title }}</h6>
              <p class="card-text">{{ movie.original_language }}</p>
              <span class="badge text-bg-warning">{{ movie.vote_average }}</span>
            </div>
          </div>
        </div>



      </div>
    </div>
  </main>

</template>

<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    imgUrl(e) {
      return 'https://image.tmdb.org/t/p/w342'+ e
    }
  },
  computed: {
    movies() {
      return store.movieSearched.results
    }
  }
}

</script>

<style lang="scss" scoped></style>

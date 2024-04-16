<template>
  <header>
    <div class="container">
      <div class="row ">
        <div class="col">
          <div class="input-group m-3">
            <input v-model.trim="searchInput" @keyup.enter="getMovie" type="text" class="form-control">
            <button @click="getMovie" class="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>

      </div>
    </div>
  </header>

</template>

<script>
import { store } from '../store.js';
import axios from 'axios'

export default {
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    getMovie() {
      console.log(this.searchInput);

      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.apiKey,
          query: this.searchInput,
          language:'it_IT'
        }
      }).then((res) => {
        console.log(res.data);
        store.movieSearched = res.data;
      })


      this.searchInput = '';
    }

  },
  computed: {
    apiKey() {
      return store.api_key
    }
  }
}

</script>

<style lang="scss" scoped></style>

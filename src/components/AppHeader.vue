<template>
  <header>
    <div class="container">
      <div class="row justify-content-between align-items-center mb-4">
        <div class="col-auto">
          <button @click="$emit('toggleAside')" type="button" class="btn btn-dark me-1 btn-manu">
            <i class="bi bi-list fs-1"></i>
          </button>
          <!-- <p class="text-white">{{  }}</p> -->
          <img :src="vw > 768 ? imgSrc('logo.svg') : imgSrc('fav.png')" class="logo">
        </div>


        <div class="col-auto">
          <div class="d-flex gap-2 align-items-center">
            <div class="input-group">
              <input v-model.trim="searchInput" @keyup.enter="search" type="text"
                :class="{ 'search-close': searchFocus }"
                class="form-control bg-secondary bg-opacity-25 border-0 text-white search-open">
              <button type="button" @click="search" :class="{ 'search-btn-focus': !searchFocus }"
                class="btn btn-dark btn-manu ">
                <i class="bi bi-search fs-4"></i>
              </button>
            </div>
            <img :src="imgSrc('avatar.png')" class="logo">
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
  props: ['searchFocus'],
  data() {
    return {
      searchInput: 'ritorno al futuro',
    }
  },
  methods: {
    search() {
      if (!this.searchFocus) {
        this.getMovie();
        this.getTvSeries();
        this.searchInput = '';
        this.$emit('toggleSearch');
      } else {
        this.$emit('toggleSearch');
      }

    },
    getMovie() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.apiKey,
          query: this.searchInput,
          language: 'it_IT'
        }
      }).then((res) => {
        // console.log(res.data);
        store.movieSearched = res.data;
      })
    },
    getTvSeries() {
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: this.apiKey,
          query: this.searchInput,
          language: 'it_IT'
        }
      }).then((res) => {
        // console.log(res.data);
        store.tvSeriesSearched = res.data;
      })
    },
    imgSrc(nameFile) {
      return '/src/assets/img/' + nameFile
    }

  },
  computed: {
    apiKey() {
      return store.api_key
    },
    vw() {
      return store.windowWidth
    },
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.logo {
  height: 40px;
}

.btn-manu {
  background-color: $bg-main;
  border-color: $bg-main;
}

.search-open {
  width: 100px !important;
  transition: width 1s;
}

.search-close {
  width: 0 !important;
  padding: 0;
}

.search-btn-focus {
  background-color: #2E3032;
  border-color: #2E3032;
}
</style>

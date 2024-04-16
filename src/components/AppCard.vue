<template>
  <div class="card">
    <img :src="imgUrl" class="card-img-top" alt="img copertina movie">
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ originalTitle }}</h6>
      <p class="card-text f-noto-emoji">{{ flagToEmoji[language.toUpperCase()] }}</p>
      <span class="badge text-bg-warning">{{ vote }}</span>
    </div>
  </div>
</template>

<script>
import flagToEmoji from '../assets/flag.json';

export default {
  props: ['imgUrl', 'title', 'originalTitle', 'language', 'vote'],
  data() {
    return {
      flagToEmoji
    }
  },
}

</script>

<style lang="scss" scoped></style>

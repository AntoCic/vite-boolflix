<template>
  <div @click.self="$emit('toggleAside')" class="offset">
    <aside class="d-flex flex-column justify-content-center">
      <ul class="d-contents">
        <li @click.self="$emit('toggleAside'); $emit('toggleSearch')" class="pg-ref"><i class="bi bi-search"></i>Cerca
        </li>
        <li class="pg-ref"><i class="bi bi-house-fill"></i>Home</li>
        <li class="pg-ref"><i class="bi bi-film"></i>Film</li>
        <li class="pg-ref"><i class="bi bi-tv"></i>Serie TV</li>
      </ul>

    </aside>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}

</script>

<style lang="scss" scoped>
.offset {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

aside {
  width: 70%;
  height: 100%;
  background-color: rgba(black, 0.7);
  animation-name: aside-out;
  animation-duration: 0.5s;
}

@keyframes aside-out {
  from {
    width: 0;
  }

  to {
    width: 70%;
  }
}

.pg-ref {
  color: white;
  font-size: 1.5em;
  margin: 12px;

  &:hover {
    color: gray;
  }

  .bi {
    margin-right: 12px;
  }
}
</style>

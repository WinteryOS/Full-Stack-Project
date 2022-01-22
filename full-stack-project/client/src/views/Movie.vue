<template>
  <div v-if="movie">
    <div>{{ movie.title }}</div>
    <img
      class="movie-img"
      v-bind:src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "movie",
  data() {
    return {
      movie: null,
      //   token: null,
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=21942037df64bd391a7cff90bc6755db&language=en-US`
      )
      .then((res) => {
        this.movie = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

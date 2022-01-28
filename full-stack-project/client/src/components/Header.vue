<template>
  <div
    v-if="movie.backdrop_path"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    }"
    class="bg-image"
  >
    <div class="content">
      <div class="header-content">
        <div v-if="content">
          <h1>{{ movie.title }}</h1>
          <div class="row genre-spacing">
            <div v-for="genre in allGenres">
              <div v-for="g in movie.genre_ids">
                <div
                  style="padding: 0px 20px 40px 0px; font-weight: 700"
                  v-if="g === genre.id"
                >
                  {{ genre.name }}
                </div>
              </div>
            </div>
          </div>
          <router-link class="btn default-btn" to="/register"
            >GET STARTED</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["movie", "content"],
  data() {
    return {
      allGenres: [],
    };
  },
  created() {
    axios.get("json/genre.json").then((res) => {
      this.allGenres = res.data;
    });
  },
};
</script>

<style>
.bg-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
}
.header-content {
  padding: 150px 40px;
  max-width: 700px;
  text-align: left;
  color: #ffffff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.85);
}
.genre-spacing {
  padding-right: 20px;
}
</style>

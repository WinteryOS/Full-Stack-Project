<template>
  <div>
    <form class="search-form" v-on:submit.prevent="submitForm">
      <div class="form-area">
        <div>
          <div>
            <label><b>Title</b></label>
            <input
              type="text"
              id="input"
              placeholder="Enter Movie Title or Actor"
              v-model="form.input"
            />
          </div>
        </div>
        <div class="row-space-around">
          <div class="btn default-btn" v-on:click="reset">Reset</div>
          <button type="submit" class="btn confirm-btn">SEARCH</button>
        </div>
      </div>
    </form>
    <div class="movie-section" v-if="searched.length">
      <div v-for="movie in searched">
        <div class="movie-container" v-on:click="movieSelected(movie.id)">
          <img
            class="movie-img"
            v-bind:src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
          />
        </div>
      </div>
    </div>
    <div class="movie-section" v-else-if="popular.length">
      <div v-for="movie in popular">
        <div class="movie-container" v-on:click="movieSelected(movie.id)">
          <img
            class="movie-img"
            v-bind:src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "account",
  data() {
    return {
      form: {
        input: "",
      },
      popular: [],
      searched: [],
      genres: [],
    };
  },
  methods: {
    submitForm() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=${this.form.input}&page=1`
        )
        .then((res) => {
          //Get genres and filter with
          this.searched = res.data.results;
          this.popular = [];
          console.log(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    movieSelected(id) {
      this.$router.push(`/movie/${id}`);
    },
    reset() {
      if (!this.popular.length) {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&page=1"
          )
          .then((res) => {
            this.popular = res.data.results;
            this.searched = [];
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.form.input = "";
    },
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&page=1"
      )
      .then((res) => {
        this.popular = res.data.results;
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.movie-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
}
.movie-img {
  width: 200px;
  border-radius: 5px;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  cursor: pointer;
}
.movie-img:hover {
  width: 205px;
}
.movie-container {
  height: 310px;
}
</style>

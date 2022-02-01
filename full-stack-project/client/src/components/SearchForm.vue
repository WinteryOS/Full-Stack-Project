<template>
  <div>
    <Header :movie="popular[0]" :content="true" />
    <div class="page-space content">
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
              <div class="genre-section">
                <div v-for="genre in allGenres">
                  <div class="row">
                    <input
                      type="checkbox"
                      v-bind:value="genre.id"
                      v-bind:id="genre.id"
                      v-model="form.genre"
                    />
                    <div>{{ genre.name }}</div>
                  </div>
                </div>
              </div>
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
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
export default {
  name: "account",
  data() {
    return {
      form: {
        input: "",
        genre: [],
      },
      popular: [],
      searched: [],
      allGenres: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    submitForm() {
      this.searched = [];
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=${this.form.input}&page=1`
        )
        .then((res) => {
          res.data.results.forEach((movie) => {
            if (
              movie.media_type === "movie" &&
              movie.backdrop_path &&
              movie.poster_path &&
              this.compareGenres(this.form.genre, movie.genre_ids)
            ) {
              this.searched.push(movie);
            } else if (movie.media_type === "person") {
              movie.known_for.forEach((m) => {
                if (
                  m.backdrop_path &&
                  m.poster_path &&
                  this.compareGenres(this.form.genre, m.genre_ids)
                ) {
                  this.searched.push(m);
                }
              });
            }
          });
          this.popular = [];
          console.log(this.searched);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    compareGenres(selectedGenres, movieGenres) {
      return selectedGenres.every((e) => {
        return movieGenres.includes(e);
      });
    },
    movieSelected(id) {
      this.$router.push(`/${id}`);
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
      this.form.genre = [];
    },
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&page=1"
      )
      .then((res) => {
        this.popular = res.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("json/genre.json").then((res) => {
      this.allGenres = res.data;
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
.genre-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  margin-bottom: 40px;
}
</style>

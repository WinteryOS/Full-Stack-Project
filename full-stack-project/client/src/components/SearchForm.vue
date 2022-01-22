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
        <button type="submit" class="btn confirm-btn">SEARCH</button>
      </div>
    </form>
    <div class="movie-section" v-if="popular.length">
      <div class="" v-for="movie in popular">
        <div v-on:click="movieSelected(movie.id)">
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
//Genre Using JSON File

//Display Image
//https://image.tmdb.org/t/p/original/b6qUu00iIIkXX13szFy7d0CyNcg.jpg

//https://api.themoviedb.org/3/search/multi?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=toby&page=1&include_adult=false

//Popular
//https://api.themoviedb.org/3/movie/popular?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&page=1
import axios from "axios";

export default {
  name: "account",
  data() {
    return {
      form: {
        input: "",
      },
      popular: [],
    };
  },
  methods: {
    submitForm() {
      console.log(this.form.input);
      //ADJUST POST TO PUT
      // axios
      //   .post("http://localhost:9000/api/authenticate", this.form)
      //   .then((res) => {
      //     //Local Storage Remove
      //     localStorage.setItem("token", JSON.stringify(res.data.token));
      //     localStorage.setItem("user", JSON.stringify(res.data.user));
      //     //Popup Showing Success
      //   })
      //   .catch((err) => {
      //     //Error Display on Form
      //     console.log(err);
      //   });
    },
    movieSelected(id) {
      this.$router.push(`/movie/${id}`);
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

// import axios from 'axios';

// export default {
//   data() {
//     return {
//       posts: [],
//       errors: []
//     }
//   },

//   // Fetches posts when the component is created.
//   created() {
//     axios.get(`https://api.themoviedb.org/3/search/person?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=Nicholas%20Cage&page=1&include_adult=false`)
//     .then(response => {
//       // JSON responses are automatically parsed.
//       this.posts = response.data
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   }
// }
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
</style>

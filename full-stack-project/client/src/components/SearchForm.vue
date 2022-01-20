<template>
  <form class="search-form" v-on:submit.prevent="submitForm">
    <div class="form-area">
    <div class="search-inputs">
    <div class="">
      <label><b>Username</b></label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        v-model="form.username"
      />
    </div>
    <div class="">
      <label><b>Password</b></label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        v-model="form.password"
      />
    </div>
    </div>
      <button type="submit" class="btn confirm-btn">EDIT</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "account",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
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
  },
};

// <script>
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

// // Movie Title Search
// // https://api.themoviedb.org/3/search/movie?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=<<INPUT>>&page=1&include_adult=false

// // Actor Search
// // https://api.themoviedb.org/3/search/person?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=<<INPUT>>&page=1&include_adult=false

// // Genre Search
// // https://api.themoviedb.org/3/genre/movie/list?api_key=21942037df64bd391a7cff90bc6755db&language=en-US
//         // Only brings up genre list, doesn't let you select certian ones.

// </script>
</script>

<style>
.search-inputs{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
}

</style>

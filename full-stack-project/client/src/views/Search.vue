

<template>
  <div>
      <div class="custom-select" style="width:200px;">
  <select>
    <option value="0">Select Search Focus:</option>
    <option value="1">Movie Title</option>
    <option value="2">Actor</option>
    <option value="3">Genre</option>
  </select>
</div>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://api.themoviedb.org/3/search/person?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=Nicholas%20Cage&page=1&include_adult=false`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

// Movie Title Search
// https://api.themoviedb.org/3/search/movie?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=<<INPUT>>&page=1&include_adult=false

// Actor Search
// https://api.themoviedb.org/3/search/person?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=<<INPUT>>&page=1&include_adult=false

// Genre Search
// https://api.themoviedb.org/3/genre/movie/list?api_key=21942037df64bd391a7cff90bc6755db&language=en-US
        // Only brings up genre list, doesn't let you select certian ones.

</script>

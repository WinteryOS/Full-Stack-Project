

<template>
  <div>
      <div class="custom-select" style="width:200px;">
        <select v-model="selected">
          <option disabled value=""> Select Search Focus</option>
          <option>Movie Title and People</option>
          <option>Genres</option>
        </select>
        <input v-model="message" placeholder="SEARCH">
        <div>
          <div class="genre-select-1">
            <input type="checkbox" id="ActionChk" v-model="checked">
            <label for="checkbox">Action</label>
            <input type="checkbox" id="ComedyChk" v-model="checked">
            <label for="checkbox">Comedy</label>
            <input type="checkbox" id="FamilyChk" v-model="checked">
            <label for="checkbox">Family</label> 
            <input type="checkbox" id="HistoryChk" v-model="checked">
            <label for="checkbox">History</label> 
            <input type="checkbox" id="MysteryChk" v-model="checked">
            <label for="checkbox">Mystery</label> 
            <input type="checkbox" id="SciFiChk" v-model="checked">
            <label for="checkbox">Sci-Fi</label> 
            <input type="checkbox" id="WarChk" v-model="checked">
            <label for="checkbox">War</label> 
          </div>
          <div class="genre-select-2">
            <input type="checkbox" id="AdventureChk" v-model="checked">
            <label for="checkbox">Adventure</label>
            <input type="checkbox" id="CrimeChk" v-model="checked">
            <label for="checkbox">Crime</label>
            <input type="checkbox" id="FantasyChk" v-model="checked">
            <label for="checkbox">Family</label> 
            <input type="checkbox" id="HorrorChk" v-model="checked">
            <label for="checkbox">Horror</label> 
            <input type="checkbox" id="NewsChk" v-model="checked">
            <label for="checkbox">News</label> 
            <input type="checkbox" id="SportsChk" v-model="checked">
            <label for="checkbox">Sports</label> 
            <input type="checkbox" id="WesternChk" v-model="checked">
            <label for="checkbox">Western</label> 
          </div>
          <div class="genre-select-3">
            <input type="checkbox" id="AnimationChk" v-model="checked">
            <label for="checkbox">Animation</label>
            <input type="checkbox" id="DocumentaryChk" v-model="checked">
            <label for="checkbox">Documetary</label>
            <input type="checkbox" id="FilmNoirChk" v-model="checked">
            <label for="checkbox">Film-Noir</label> 
            <input type="checkbox" id="MusicChk" v-model="checked">
            <label for="checkbox">Music</label> 
            <input type="checkbox" id="RealityTVChk" v-model="checked">
            <label for="checkbox">Reality-TV</label> 
            <input type="checkbox" id="TalkShowChk" v-model="checked">
            <label for="checkbox">Talk-Show</label> 
          </div>
          <div class="genre-select-4">
            <input type="checkbox" id="BiographyChk" v-model="checked">
            <label for="checkbox">Biography</label>
            <input type="checkbox" id="DramaChk" v-model="checked">
            <label for="checkbox">Drama</label>
            <input type="checkbox" id="GameShowChk" v-model="checked">
            <label for="checkbox">Game-Show</label> 
            <input type="checkbox" id="MusicalChk" v-model="checked">
            <label for="checkbox">Musical</label> 
            <input type="checkbox" id="RomanceChk" v-model="checked">
            <label for="checkbox">Romance</label> 
            <input type="checkbox" id="ThrillerChk" v-model="checked">
            <label for="checkbox">Thriller</label> 
          </div>
        </div>
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

// MULTISEARCH
// https://api.themoviedb.org/3/search/multi?api_key=21942037df64bd391a7cff90bc6755db&language=en-US&query=<<INPUT>>&page=1&include_adult=false

// Genre Search 2.0
// https://imdb-api.com/API/AdvancedSearch/k_3uz41xc5?genres=<<INPUT,INPUT>>

</script>

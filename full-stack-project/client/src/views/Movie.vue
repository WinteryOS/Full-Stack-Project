<template>
  <div>
    <div class="backdrop-holder">
           <div class="content backdrop-content border-test" v-if="movie">
        <img
        class="backdrop-img border-test"
        v-bind:src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
      />
     </div>
      </div>

    <div class="content movie-content border-test" v-if="movie">
      <img
        class="poster-img border-test"
        v-bind:src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />
        <h1>{{ movie.title }}</h1>
      <br>
      <div class="border-test">
        <div class="row-space-between">
        </div>
        <div>{{ movie.overview }}</div>
        <div>-----More info about movie-------</div>
        <div>GENRES</div>
        <div v-for="genre in movie.genres">{{ genre.name }}</div>
        <div class="btn default-btn" v-on:click="showModal">LEAVE A REVIEW</div>
      </div>

      <div></div>
    </div>
    <div v-if="reviews" class="review-content row-center border-test">
      <div v-for="review in reviews" class="review-card">
        <div>{{ review.username }}</div>
        <div>{{ review.review }}</div>
      </div>
    </div>
    <Modal v-show="isModalVisable" @close="closeModal" />
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/ReviewModal.vue";
export default {
  name: "movie",
  components: {
    Modal,
  },
  data() {
    return {
      movie: null,
      isModalVisable: false,
      reviews: [],
    };
  },
  methods: {
    showModal() {
      this.isModalVisable = true;
    },
    closeModal() {
      this.isModalVisable = false;
    },
  },
  created() {
    //GETS REVIEWS
    axios
      .get(`http://localhost:9000/api/review`)
      .then((res) => {
        this.reviews = res.data.filter(
          (review) => review.movieId === this.$route.params.id.toString()
        );
      })
      .catch((err) => {
        console.log(err);
      });

    //GETS MOVIE INFORMATION
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

    //Getting Cast Members
    //http://api.themoviedb.org/3/movie/{id}/casts?api_key={api_key}
  },
};
</script>

<style>

.backdrop-holder{
    width:100%;
    height:400px;
    overflow:hidden;
}

.backdrop-img{
  width: 100%;
  height: auto;
  overflow: hidden;
}

.movie-content {
  display: grid;
  max-width: 900px;
  justify-items: center;
  align-items: center;
  text-align: left;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  border: 1px solid black;
}
.backdrop-content {
  display: grid;
  max-width: 1900px;
  justify-items: center;
  align-items: center;
  text-align: left;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  border: 1px solid black;
}
.review-content {
  margin: 0 auto;
  max-width: 900px;
}
.review-card {
  padding: 20px;
  margin: 20px 10px;
  width: 225px;
  border: 1px solid red;
}
.poster-img {
  max-height: 300px;
  max-width: 400px;
}
</style>

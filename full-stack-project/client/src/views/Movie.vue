<template>
  <div>
    <Header :movie="movie" :content="false" />

    <div class="movie-content" v-if="movie">
      <img
        class="poster-img"
        v-bind:src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
      />

      <div class="movie-descriptions">
        <h1 class="white-text">{{ movie.title }}</h1>
        <div class="row bold">
          <div v-for="genre in movie.genres">
            <div style="padding: 20px 20px 20px 0px" class="genre-spacing">
              {{ genre.name }}
            </div>
          </div>
        </div>
        <div style="line-height: 1.75">{{ movie.overview }}</div>
        <div
          style="margin-top: 25px"
          class="btn default-btn"
          v-on:click="showModal"
        >
          LEAVE A REVIEW
        </div>
      </div>
    </div>
    <div v-if="reviews.length" class="review-content border-test">
      <h2 style="padding: 0px 35spx">Reviews:</h2>
      <div class="row-center">
        <div v-for="review in reviews" class="review-card">
          <div>{{ review.username }}</div>
          <div>{{ review.review }}</div>
          <div>{{ review.rating }}</div>
        </div>
      </div>
    </div>
    <Modal v-show="isModalVisable" @close="closeModal" />
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/ReviewModal.vue";
import Header from "@/components/Header.vue";
export default {
  name: "movie",
  components: {
    Modal,
    Header,
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
.movie-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: -75px auto 0px auto;
  text-align: left;
}
.movie-descriptions {
  max-width: 550px;
  padding: 0px 20px;
}
.review-content {
  margin: 25px auto 25px auto;
  max-width: 900px;
  text-align: left;
}
.review-card {
  padding: 20px;
  margin: 20px 10px;
  width: 225px;
  border: 1px solid red;
}
.poster-img {
  width: 250px;
  border-radius: 7px;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.4);
}
</style>

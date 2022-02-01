<template>
  <div class="content">
    <div class="row-space-between user-title">
      <div class="row">
        <div style="width: 300px">USER ID</div>
        <div style="width: 250px">USERNAME</div>
        <div style="width: 250px">ADMIN</div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
    <div class="user-display">
      <div v-if="allUsers.length">
        <div v-for="user in allUsers">
          <div class="row-space-between user-content">
            <div class="row">
              <div style="width: 300px">{{ user._id }}</div>
              <div style="width: 250px">{{ user.username }}</div>
              <div style="width: 250px">{{ user.admin }}</div>
            </div>
            <div>
              <div class="btn delete-btn" v-on:click="deleteUser(user._id)">
                DELETE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-space-between user-title">
      <div class="row">
        <div style="width: 200px">USERNAME</div>
        <div style="width: 150px">RATING</div>
        <div style="width: 250px">REVIEW</div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
    <div class="review-display">
      <div v-if="allReviews.length">
        <div v-for="review in allReviews">
          <div class="row-space-between user-content">
            <div class="row">
              <div style="width: 200px">{{ review.username }}</div>
              <div style="width: 150px">{{ review.rating }}</div>
              <div style="width: 650px; text-overflow: ellipsis">
                {{ review.review }}
              </div>
            </div>
            <div>
              <div class="btn delete-btn" v-on:click="deleteReview(review._id)">
                DELETE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "admin",
  data() {
    return {
      allUsers: [],
      allReviews: [],
    };
  },
  methods: {
    deleteUser(userID) {
      axios
        .delete(`http://localhost:9000/api/${userID}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteReview(reviewID) {
      axios
        .delete(`http://localhost:9000/api/review/${reviewID}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    axios
      .get(`http://localhost:9000/api/`)
      .then((res) => {
        this.allUsers = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:9000/api/review`)
      .then((res) => {
        this.allReviews = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.user-title {
  text-align: left;
  padding: 10px;
  margin: 35px 18px 5px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: #fff;
}
.user-content {
  text-align: left;
  padding: 10px;
  margin: 5px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #fff;
}
.user-display {
  height: 365px;
  overflow-y: scroll;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
.review-display {
  height: 200px;
  overflow-y: scroll;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
</style>

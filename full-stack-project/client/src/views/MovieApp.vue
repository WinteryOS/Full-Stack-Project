<template>
  <div>
    <h1>Hello {{ user.username }}, Welcome To Main App Page</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "movieapp",
  data() {
    return {
      //   user: null,
      //   token: null,
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
    //If not token - Redirect Page
    if (!this.token) {
      this.$router.push("/");
    }
  },
};
</script>

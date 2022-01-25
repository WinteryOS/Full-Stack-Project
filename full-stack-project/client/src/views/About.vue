<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "about",
  // data() {},
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
    //If token - Redirect To Movie Page
    if (this.token) {
      this.$router.push("/movieapp");
    }
  },
};
</script>

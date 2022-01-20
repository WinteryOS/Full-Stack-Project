<template>
  <div class="page-space content">
    <h1>Hello {{ user.username }}, Welcome To Main App Page</h1>
    <div class="app-subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non leo
      in leo interdum consequat quis sit amet diam. Donec a aliquet ante.
      Vestibulum ac dapibus ex, ut pellentesque odio. Ut at consectetur nulla.
    </div>
    <SearchForm />
  </div>
</template>

<script>
import axios from "axios";
import SearchForm from "@/components/SearchForm.vue";
export default {
  name: "movieapp",
  data() {
    return {
      //   user: null,
      //   token: null,
    };
  },
  components: {
    SearchForm,
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

<style>
.page-space {
  margin: 60px auto;
}
.app-subtitle {
  max-width: 800px;
  margin: 0 auto;
}
</style>

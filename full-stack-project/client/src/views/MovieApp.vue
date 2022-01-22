<template>
  <div class="page-space content">
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

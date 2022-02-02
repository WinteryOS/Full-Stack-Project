<template>
  <form class="account-form" v-on:submit.prevent="submitForm">
    <div class="form-area">
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        v-model="form.username"
      />

      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        v-model="form.password"
      />

      <div v-for="error in errors">
        <div>{{ error }}</div>
      </div>

      <button type="submit" class="btn confirm-btn">LOGIN</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
        errors: [],
    };
  },
  methods: {
    submitForm() {
      
      axios
        .post("http://localhost:9000/api/authenticate", this.form)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.push("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

<template>
  <form v-on:submit.prevent="submitForm">
    <div class="formArea">
      <label><b>Username</b></label>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        v-model="form.username"
      />

      <label><b>Password</b></label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        v-model="form.password"
      />

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
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:9000/api/authenticate", this.form)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.replace({
            name: "movieapp",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

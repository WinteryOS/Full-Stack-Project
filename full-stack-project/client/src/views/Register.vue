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
      <button type="submit" class="btn confirm-btn">CREATE ACCOUNT</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        admin: false,
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:9000/api", this.form)
        .then((res) => {
          //Success - Route to Home or Login
          //Code Below Routes to Home
          this.$router.push("/");
          console.log(res.data);
        })
        .catch((err) => {
          //Display Error On Page
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

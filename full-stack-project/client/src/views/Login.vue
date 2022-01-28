<template>
  <form class="account-form" v-on:submit.prevent="submitForm">
    <div class="form-area">
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
      this.errors = [];
      const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      // console.log(this.form.username);
      if (!usernameRegex.test(this.form.username)) {
        this.errors.push("Username Invalid");
      }
      if(!passwordRegex.test(this.form.password)) {
        this.errors.push("Password Invalid")
      }
      
      else{
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

      }
    },
  },
};
</script>

<style></style>

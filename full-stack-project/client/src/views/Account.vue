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

      <button type="submit" class="btn confirm-btn">EDIT</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "account",
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
      //ADJUST POST TO PUT
      // axios
      //   .post("http://localhost:9000/api/authenticate", this.form)
      //   .then((res) => {
      //     //Local Storage Remove
      //     localStorage.setItem("token", JSON.stringify(res.data.token));
      //     localStorage.setItem("user", JSON.stringify(res.data.user));
      //     //Popup Showing Success
      //   })
      //   .catch((err) => {
      //     //Error Display on Form
      //     console.log(err);
      //   });
    },
  },
};
</script>

<style></style>

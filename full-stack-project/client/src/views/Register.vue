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
        type="text"
        id="fname"
        placeholder="Enter First Name"
        v-model="form.fname"
      />
      <input
        type="text"
        id="lname"
        placeholder="Enter Last Name"
        v-model="form.lname"
      />
      <input
        type="text"
        id="street"
        placeholder="Enter Street"
        v-model="form.street"
      />
      <input
        type="text"
        id="city"
        placeholder="Enter City"
        v-model="form.city"
      />
      <input
        type="text"
        id="state"
        placeholder="Enter State (Ex: UT)"
        v-model="form.state"
      />
      <input
        type="number"
        id="zip_code"
        placeholder="Enter Zip Code"
        v-model="form.zip_code"
      />
      <input
        type="text"
        id="email"
        placeholder="Enter Email"
        v-model="form.email"
      />
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        v-model="form.password"
      />
      <input
        type="text"
        id="phone"
        placeholder="Enter Phone Number"
        v-model="form.phone"
      />
      <div v-for="error in errors">
        <div>{{ error }}</div>
      </div>
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
        fname: "",
        lname: "",
        street: "",
        city: "",
        state: "",
        zip_code: 0,
        email: "",
        password: "",
        phone: "",
        username: "",
        admin: false,
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
        .post("http://localhost:9000/api", this.form)
        .then((res) => {
          this.$router.push("/login");
          console.log(res.data);
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

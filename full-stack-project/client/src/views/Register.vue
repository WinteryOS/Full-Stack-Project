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
      const nameRegex = /^[a-z ,.'-]+$/i;
      const streetRegex = /^\s*\S+(?:\s+\S+){2}/;
      const cityRegex =
        /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
      const stateRegex = /[^,]*[A-Z]{2}/;
      const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
      const emailRegex =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
      console.log("hello");
      // console.log(this.form.username);
      if (!usernameRegex.test(this.form.username)) {
        this.errors.push("Username Invalid");
      }
      if (!passwordRegex.test(this.form.password)) {
        this.errors.push("Password Invalid");
      }
      if (!nameRegex.test(this.form.fname)) {
        this.errors.push("First Name Invalid");
      }
      if (!nameRegex.test(this.form.lname)) {
        this.errors.push("Last Name Invalid");
      }
      if (!streetRegex.test(this.form.street)) {
        this.errors.push("First Name Invalid");
      }
      if (!cityRegex.test(this.form.city)) {
        this.errors.push("City is Invalid");
      }
      if (!stateRegex.test(this.form.state)) {
        this.errors.push("State Invalid");
      }
      if (!zipRegex.test(this.form.zip_code)) {
        this.errors.push("Zip Code Invalid");
      }
      if (!emailRegex.test(this.form.email)) {
        this.errors.push("Email Invalid");
      }
      if (!phoneRegex.test(this.form.phone)) {
        this.errors.push("Phone Number Invalid");
      } else {
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

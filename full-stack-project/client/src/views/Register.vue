<template>
  <form v-on:submit.prevent="submitForm">
    <div class="registerArea">
      <hr />
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
      <hr />

      <button type="submit" class="registerbtn">Register</button>
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
          // this.$router.push("/");
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

<style scoped>
.registerArea {
  padding: 16px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>

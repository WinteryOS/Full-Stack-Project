<template>
  <div>
    <Navbar :name="$route.name" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.border-test {
  border: 1px solid black;
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.row-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.row-space-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.row-space-around {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.sm-icon {
  width: 58px;
}
.btn {
  padding: 10px 25px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  opacity: 0.9;
}
.btn:hover {
  opacity: 1;
}
.default-btn {
  background-color: #02198b;
  color: #ffffff;
  max-width: 150px;
}
.confirm-btn {
  background-color: #04aa6d;
  color: #ffffff;
}
form {
}
.account-form {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.search-form {
  position: fixed;
  z-index: 10;
  bottom: 50px;
  right: 50px;
  width: 350px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}
input[type="text"],
input[type="password"] {
  width: 90%;
  padding: 15px;
  margin: 10px 0 28px 0;
  display: inline-block;
  border: none;
  background: #f6f6f6;
  border-radius: 3px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #eee;
  outline: none;
}
.form-area {
  padding: 16px;
}
.grey-bg {
  background-color: #eeeeee;
}
</style>

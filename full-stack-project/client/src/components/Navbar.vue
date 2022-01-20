<template>
  <div class="navbar">
    <div class="nav-content">
      <router-link class="nav-link row" to="/"
        ><img class="sm-icon" alt="Movie Icon" src="../assets/movie-icon.png" />
        <div class="title">Movie Review</div></router-link
      >
      <div>
        <div
          id="nav"
          class="row"
          v-if="name === 'movieapp' || name === 'account'"
        >
          <router-link class="nav-link" to="/account">Account</router-link>
          <div class="nav-link" v-on:click="signOut">Sign Out</div>
        </div>
        <div id="nav" v-else>
          <router-link class="nav-link" to="/register">Sign Up</router-link>
          <router-link class="nav-link" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    signOut: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar {
  background-color: #f3f3f3;
  height: 80px;
}
.nav-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
.nav-link {
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
}
.title {
  font-size: 28px;
  padding: 0px 15px;
  margin-top: 5px;
  color: black;
}
</style>

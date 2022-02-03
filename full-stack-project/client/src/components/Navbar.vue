<template>
  <div class="navbar">
    <div class="nav-content">
      <router-link class="nav-link row" to="/"
        ><img class="sm-icon" alt="Movie Icon" src="../assets/sliced.jpg" />
        <div class="title">tomatoes</div></router-link
      >
      <div>
        <div id="nav" class="row" v-if="token">
          <div v-if="user.admin">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </div>
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
  data() {
    return {
      user: null,
      token: null,
    };
  },
  methods: {
    signOut: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
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
  position: relative;
  background-color: #ffffff;
  height: 80px;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.4);
  z-index: 5;
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
  font-size: 45px;
  font-weight: 700;
  margin-top: 3px;
  padding: 0px 15px;

  color: #cf222e;
}
</style>

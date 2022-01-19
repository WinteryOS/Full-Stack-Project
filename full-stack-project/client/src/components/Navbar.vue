<template>
  <div>
    <div id="nav" v-if="name === 'movieapp'">
      <router-link to="/">Account</router-link>
      <div v-on:click="signOut">Sign Out</div>
    </div>
    <div id="nav" v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

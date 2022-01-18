<template>
  <div>
    <div id="nav" v-if="name === 'movieapp'">
      <router-link to="/">Home</router-link>
    </div>
    <div id="nav" v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Test</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    console.log("create");
  },
  watch: {},
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

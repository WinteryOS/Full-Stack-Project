import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Search from "./views/Search.vue";
import MovieApp from "./views/MovieApp.vue";
import Account from "./views/Account.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
    {
      path: "/movieapp",
      name: "movieapp",
      component: MovieApp,
    },
  ],
});

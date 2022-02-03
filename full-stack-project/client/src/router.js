import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Account from "./views/Account.vue";
import Admin from "./views/Admin.vue";
import Movie from "./views/Movie.vue";

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
      path: "/account",
      name: "account",
      component: Account,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/:id",
      name: "movie",
      component: Movie,
      props: true,
    },
  ],
});

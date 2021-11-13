import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base:'/vue-to-do',
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: () => import("./pages/todos.vue"),
    },
  ],
});

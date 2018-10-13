import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Age from "./views/Age.vue";
import Gender from "./views/Gender.vue";
import Smile from "./views/Smile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { transitionName: 'slide' }
    },
    {
      path: "/age",
      name: "age",
      component: Age,
      meta: { transitionName: 'slide' }
    },
    {
      path: "/gender",
      name: "gender",
      component: Gender,
      meta: { transitionName: 'slide' }
    },
    {
      path: "/smile",
      name: "smile",
      component: Smile,
      meta: { transitionName: 'slide' }
    }
  ]
});

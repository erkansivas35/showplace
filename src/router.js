import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Age from "./views/Age.vue";
import Gender from "./views/Gender.vue";
import Smile from "./views/Smile.vue";
import Guide from "./views/Guide.vue";
import Restoration from "./views/Restoration.vue";
import Discovery from "./views/Discovery.vue";
import Result from "./views/Result.vue";

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
    },
    {
      path: "/guide",
      name: "guide",
      component: Guide,
      meta: { transitionName: 'slide' }
    },
    {
      path: "/restoration",
      name: "Restoration",
      component: Restoration,
      meta: { transitionName: 'slide' }
    },
    {
      path: "/discovery",
      name: "Discovery",
      component: Discovery,
      meta: { transitionName: 'slide' }
    },
    {
      path: "/result",
      name: "Result",
      component: Result,
      meta: { transitionName: 'slide' }
    }
  ]
});

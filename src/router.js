import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShowDetail from "./views/ShowDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shows/:id",
      name: "show",
      component: ShowDetail
    }
  ]
});

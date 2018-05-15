import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShowDetail from "./views/ShowDetail.vue";
import ShowCreate from "./views/ShowCreate.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shows/new",
      name: "show.create",
      component: ShowCreate
    },
    {
      path: "/shows/:id",
      name: "show",
      component: ShowDetail
    }
  ]
});

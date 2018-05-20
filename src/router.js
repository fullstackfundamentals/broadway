import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShowDetail from "./views/ShowDetail.vue";
import ShowCreate from "./views/ShowCreate.vue";
import ShowEdit from "./views/ShowEdit.vue";
import Login from "./views/Login.vue";

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
    },
    {
      path: "/shows/:id/edit",
      name: "show.edit",
      component: ShowEdit
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

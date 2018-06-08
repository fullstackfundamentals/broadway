import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShowDetail from "./views/ShowDetail.vue";
import ShowCreate from "./views/ShowCreate.vue";
import ShowEdit from "./views/ShowEdit.vue";
import Login from "./views/Login.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shows/new",
      name: "show.create",
      component: ShowCreate,
      meta: {
        isProtected: true
      }
    },
    {
      path: "/shows/:id",
      name: "show",
      component: ShowDetail
    },
    {
      path: "/shows/:id/edit",
      name: "show.edit",
      component: ShowEdit,
      meta: {
        isProtected: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (!store.state.isBooted) await store.dispatch('boot');

  if (to.meta.isProtected && !store.getters.isLoggedIn) {
    return next('/login');
  }

  next();
})

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/profile/create",
    name: "ProfileForm",
    component: () => import("../views/ProfileForm.vue")
  },
  {
    path: "/todos/:todo_id?/edit",
    name: "todo_edit",
    component: () => import("../views/TodoForm.vue")
  },
  {
    path: "/todos/:todo_id?",
    name: "todo_detail",
    component: () => import("../views/TodoDetail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import Notes from "@/components/Pages/Notes.vue";
import About from "@/components/Pages/About.vue";

const routerHistory = createWebHistory();
const routers = new createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Notes,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default routers;

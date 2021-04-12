import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "./views/Accueil.vue";
import apropos from "./views/apropos.vue";
import meteo from "./views/meteo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/apropos",
    name: "Apropos",
    component: apropos
  },
  {
    path: "/meteo",
    name: "meteo",
    component: meteo
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

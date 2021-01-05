import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import SearchResults from "./views/SearchResults";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Register from "./views/Register";
import Playlist from "@/views/Playlist";

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: '/search',
      component: SearchResults,
      props(route) {
        return { query: route.query.q };
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/playlist/:id',
      name: 'playlist',
      component: Playlist,
    },
    { path: "*", component: NotFound }
  ]
});

export default Router;

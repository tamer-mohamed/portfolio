import Vue from 'vue';
import VueRouter, { Route, RouteRecord } from 'vue-router';
import Meta from 'vue-meta';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [...AppRoutes, ...HomeRoutes],
  scrollBehavior(
    to: Route,
    from: Route,
    savedPosition: { x: number; y: number },
  ) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  },
});

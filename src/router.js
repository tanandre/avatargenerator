import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/avatar/1',
    },
    {
      path: '/avatar/:id',
      name: 'avatar',
      component: Home,
    },
  ],
});


export default router;

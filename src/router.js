import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import StandAlone from './views/StandAlone.vue';

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
    {
      path: '/avatarst/:id',
      name: 'avatarst',
      component: StandAlone,
    },
  ],
});


export default router;

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Error from '@/views/Error';
import Classificator from '@/views/Classificator';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/clasificar/:system',
      name: 'classificator',
      component: Classificator,
    },
    {
      path: '*',
      name: 'error',
      component: Error,
    },
  ],
});

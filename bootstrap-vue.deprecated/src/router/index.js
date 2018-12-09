import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/auth/Login';
import Member from '@/components/member/Add';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/member',
      name: 'Member',
      component: Member,
    },
    {
      path: '*',
      redirect: '/member',
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import Member from '@/components/member/Add';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello,
    // },
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

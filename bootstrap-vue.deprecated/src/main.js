// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'vue-awesome/icons';

// import Icon from 'vue-awesome/components/Icon';
import App from './App';
import router from './router';

// Vue.component('icon', Icon)
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  http: {
    root: '/api/v1/',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk',
    },
  },
});

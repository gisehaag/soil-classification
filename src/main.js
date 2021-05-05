import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

import router from '@/router';

Vue.use(Chartkick.use(Chart));
Vue.config.productionTip = false;

new Vue({
  router,

  render: (h) => h(App),
}).$mount('#app');

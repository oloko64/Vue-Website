import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// Import global scss
import '@/colors/global.scss';
import '@/colors/variables.scss';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

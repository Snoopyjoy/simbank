// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import { Button, Input, Form, FormItem } from 'element-ui';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

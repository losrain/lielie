// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import Emitter from './libs/emitter'
import ajax from './libs/ajax';
import * as filters from './libs/filters'
sync(store, router);
Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
Vue.use(ajax);
/* eslint-disable no-new */
new Vue({
  mixins: [Emitter],
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

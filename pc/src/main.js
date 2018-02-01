// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import Emitter from './libs/emitter'
import axios from "axios";
import * as filters from './libs/filters'
var VueLazyimg = require ("./libs/vue-lazyimg");
var VueGesture = require('./libs/vue-gesture');
var instance = axios.create();
instance.defaults.withCredentials = true;
function myAjax(url, data){
  return new Promise(function(resolve, reject){
    instance.post(url, data)
    .then(function(res) {
      resolve(res.data)
    })
    .catch(function(error) {
      reject(error);
    });
  })
}
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
sync(store, router);
Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});
Vue.use(VueGesture);
Vue.use(VueLazyimg,{
    fade: true,
    nohori: true,
    speed: 20
});

Vue.prototype.$http = myAjax;
/* eslint-disable no-new */
new Vue({
  mixins: [Emitter],
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

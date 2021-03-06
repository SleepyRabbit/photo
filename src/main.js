// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './vuex/store'
import vueResource from 'vue-resource'
import './assets/css/common.css'
import './assets/font-awesome/css/font-awesome.min.css'

Vue.use(vueResource);
Vue.http.options.emulateJSON = true;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

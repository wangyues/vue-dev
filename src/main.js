import Vue from 'vue'
import App from './App'
import router from './router'
// 引用axios，并设置基础URL为后端服务api地址
var goAxios = require('axios');
goAxios.defaults.baseURL = 'http://10.224.43.118:8088';

Vue.prototype.gohttp = goAxios;
Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios'

Vue.config.productionTip = false
// 把axios挂到vue实例原型链上
Vue.prototype.$axios = axios

new Vue({
  render: (h) => h(App),
}).$mount('#app')

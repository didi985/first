import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// 引入rem
import './util/rem'
// 引入过滤器   方法
import './util/filters'
import './util/plugins'

import './util/vant'
// 引入axios
import http from './util/request'
import './assets/common.css'

import 'vant/lib/index.css'

import {gets,posts} from './util/api'

Vue.prototype.$http=http
Vue.prototype.$get=gets
Vue.prototype.$post=posts


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入rem
import './util/rem'
// 引入过滤器   方法
import './util/filters'
import './util/plugins'
// 引入vant
import './util/vant'
// 引入axios
import http from './util/request'
import './assets/common.css'

import {gets,posts} from './util/api'

Vue.prototype.$http=http
Vue.prototype.$get=gets
Vue.prototype.$post=posts



// 引入element-ui
import { Button,Card,Row,Col} from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Button)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

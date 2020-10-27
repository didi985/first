import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
  }, 
  // 首页
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
  },
  // 课程
  {
    path: '/course',
    name: 'course',
    component: () => import('../views/course.vue'),
  },
  // 约课记录
  {
    path: '/record',
    name: 'record',
    component: () => import('../views/record.vue'),
  },
  // 练习
  {
    path: '/practise',
    name: 'practise',
    component: () => import('../views/practise.vue'),
  },
  // 我的
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/person.vue'),
  },
  // 立即约课
  {
    path: '/oto',
    name: 'oto',
    component: () => import('../views/oto.vue'),
  },
  // 搜索
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue'),
  },
  // 搜索
  {
    path: '/oto-plan',
    name: 'oto-plan',
    component: () => import('../views/oto-plan.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router

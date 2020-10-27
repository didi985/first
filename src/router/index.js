import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home
    redirect: '/person',

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
  // 我的
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  // 个人信息
  {
    path: '/info',
    name: 'info',
    component: function () {
      return import('../components/info.vue')
    }
  },
   // 特色课
   {
    path: '/my-study',
    name: 'my-study',
    component: function () {
      return import('../components/my-study.vue')
    }
  },
  // 学习币
  {
    path: '/my-currency',
    name: 'my-currency',
    component: function () {
      return import('../components/my-currency.vue')
    }
  },
  // 关注的老师
  {
    path: '/concern',
    name: 'concern',
    component: function () {
      return import('../components/concern.vue')
    }
  },
  // 收藏的东西
  {
    path: '/collect',
    name: 'collect',
    component: function () {
      return import('../components/collect.vue')
    }
  },
  // 课程订单
  {
    path: '/order',
    name: 'order',
    component: function () {
      return import('../components/order.vue')
    }
  },


]

const router = new VueRouter({
  routes
})

export default router

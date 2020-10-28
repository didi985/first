import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  // 默认首页
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
  // 优惠券
  {
    path: '/coupon',
    name: 'coupon',
    component: function () {
      return import('../components/coupon.vue')
    }
  },
  // 学习卡
  {
    path: '/card',
    name: 'card',
    component: function () {
      return import('../components/card.vue')
    }
  },
  // 会员
  {
    path: '/vip',
    name: 'vip',
    component: function () {
      return import('../components/vip.vue')
    }
  },
  // 信息
  {
    path: '/message',
    name: 'message',
    component: function () {
      return import('../components/message.vue')
    }
  },
  // 意见反馈
  {
    path: '/feedback',
    name: 'feedback',
    component: function () {
      return import('../components/feedback.vue')
    }
  },
 

  //学习日历
  {
    path: '/study-calendar',
    name: 'study-calendar',
    component: () => import('../views/study-calendar.vue'),
  },
    //学习日历
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/Teacher.vue'),
    },

  // 搜索
  {
    path: '/oto-plan',
    name: 'oto-plan',
    component: () => import('../views/oto-plan.vue'),
  },


  // 搜索
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue'),
  },

]

const router = new VueRouter({
  routes
})

export default router

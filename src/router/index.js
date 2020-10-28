import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Course from '../components/Course.vue'
import Search from '../components/Search.vue'


Vue.use(VueRouter)

const routes = [
  // 默认首页
  {
    path: '/',
    // name: 'Home',
    // component: Home
<<<<<<< HEAD
    redirect: '/login',
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
=======
    redirect: '/index',
>>>>>>> 18504a47812d16f11b54017f4cdf82b482fc3ad8
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
    component: () => import('../components/Course.vue'),
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
    name: 'Per',
    component: () => import('../views/Per.vue'),

  },
  // 我的
  {
    path: '/Course',
    name: 'Course',
    component: Course
  },
  // 课程单页面
  {
    path: '/Course-detail',
    name: 'Course-detail',
    component: function () {
      return import('../components/Course-detail.vue')
    }
  },
    // 学习页面
    {
      path: '/study-detail',
      name: 'study-detail',
      component: function () {
        return import('../components/study-detail.vue')
      }
    },
  // 搜索页面
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
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
   // 设置
   {
    path: '/options',
    name: 'options',
    component: function () {
      return import('../components/options.vue')
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

  //一对一辅导
  {
    path: '/oto',
    name: 'oto',
    component: () => import('../views/oto.vue'),
  },
  // 一对一辅导详情
  {
    path: '/oto-plan',
    name: 'oto-plan',
    component: () => import('../views/oto-plan.vue'),
  },
<<<<<<< HEAD
  {
    path: '/oto',
    name: 'oto',
    component: () => import('../views/oto.vue'),
  },
  // 搜索
=======
>>>>>>> 18504a47812d16f11b54017f4cdf82b482fc3ad8
  {
    //题库选择 
    path: '/point',
    name: 'point',
    component: () => import('../views/point.vue'),
  },
  {
    //套卷练习
    path: '/paper-package',
    name: 'paper-package',
    component: () => import('../views/paper-package.vue'),
  },
<<<<<<< HEAD
  // 找回密码
  {
    path: '/forget-pass',
    name: 'forget-pass',
    component: () => import('../views/login/forget-pass.vue'),
  },
   // 学习卡兑换
   {
    path: '/exchange',
    name: 'exchange',
    component: () => import('../components/exchange.vue'),
  },


=======
  {
    //仿真练习
    path: '/exam',
    name: 'exam',
    component: () => import('../views/exam.vue'),
  },
  {
    //错题练习
    path: '/error-ques',
    name: 'error-ques',
    component: () => import('../views/error-ques.vue'),
  },
  {
    //
    path: '/error-list',
    name: 'error-list',
    component: () => import('../views/error-list.vue'),
  }
 
>>>>>>> 18504a47812d16f11b54017f4cdf82b482fc3ad8

]

const router = new VueRouter({
  routes
})

export default router

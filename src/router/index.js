import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  // 默认首页
  {
    path: '/',
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

  // 搜索
  {
    path: '/oto-plan',
    name: 'oto-plan',
    component: () => import('../views/oto-plan.vue'),
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
 

]

const router = new VueRouter({
  routes
})

export default router

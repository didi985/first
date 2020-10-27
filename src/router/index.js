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
]

const router = new VueRouter({
  routes
})

export default router

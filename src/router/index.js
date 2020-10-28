import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../components/Course.vue'
import Search from '../components/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/BlogLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import upload from '@/components/upload'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {path: '/home'}
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})

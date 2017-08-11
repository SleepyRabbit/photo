"use strict";

import home from '@/components/home'
import login from '@/components/login'
import logout from '@/components/logout'
import upload from '@/components/upload'
import register from '@/components/register'

export default [
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
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/logout',
    name: 'lougout',
    component: logout
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
  {
    path: '*',
    redirect: {path: '/home'}
  },
]


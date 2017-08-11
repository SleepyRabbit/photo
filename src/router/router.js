/**
 * Created by houenxing on 17/8/11.
 */
"use strict";

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './config/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes:routes,
});

//每次路由前都判断一下是否有权限（即是否正确登录过）
router.beforeEach((to, from, next) => {
  // console.log('beforeEach');
  var userSession = JSON.parse(localStorage.getItem('photoUser')) || {};
  console.log(userSession);
  var isLogin = Boolean(userSession.username);
  console.log(isLogin);
  if(!isLogin && to.path !== '/login' && to.path !== '/register') {
    next({path: '/login'});
  }
  else {
    next();
  }
});

export default router;




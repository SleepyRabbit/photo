/**
 * Created by houenxing on 17/8/2.
 */
"use strict";

var photoUser = JSON.parse(localStorage.getItem('photoUser')) || {};

const state = {
  user: photoUser.username || '',
  isLogin: Boolean(photoUser.username),
};

const mutations = {
  setUser: function (state, data) {
    state.user = data;
  },
  changeLoginState: function (state, data) {
    state.isLogin = data;
  },
};

const actions = {
  setUser: ({commit}, data) => {
   commit("setUser", data);
  },
  changeLoginState: ({commit}, data) => {
    commit("changeLoginState", data);
  },
};

const getters = {
  getUser: state => state.user,
  getLoginState: state => state.isLogin,
};

export default {
  state,
  mutations,
  actions,
  getters
}

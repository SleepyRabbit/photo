/**
 * Created by houenxing on 17/8/2.
 */
"use strict";

import Vue from "vue";
import Vuex from "vuex";
import login from "./config/login"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    login,
  ]
})

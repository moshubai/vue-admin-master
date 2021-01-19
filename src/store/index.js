import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user/index'
import account from './modules/account/index'

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    user,
    account
  }
})

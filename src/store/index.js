import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import account from './modules/login'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    account
  }
})

import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

// 菜单和路由
import router from './router'
import { frameInRoutes } from '@/router/routes';

import store from './store'

import '@/assets/icons'

// ViewUI
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import '@/components/common'

// style
import './style/index.less'

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('menu/init', frameInRoutes);
  },
  watch: {

  }
}).$mount('#app')

import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'

import '@/assets/icons'

// ViewUI
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// ElementUI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// style
import './style/index.less'

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

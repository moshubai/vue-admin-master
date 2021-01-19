import Vue from 'vue';
import VueRouter from 'vue-router';

import util from '@/libs/util'

import Setting from '@/project.config';

// import store from '@/store/index';

// 路由数据
import routes from './routes';

// 解决点击相同路由报错问题，（报红强迫症）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes,
  mode: Setting.routerMode,
  base: Setting.routerBase
});

/**
 * 路由拦截
 * 权限验证
 */

router.beforeEach((to, from, next) => {
  // 判断是否需要登录才可以进入
  if (to.matched.some(_ => _.meta.auth)) {
    // 这里依据 token 判断是否登录，可视情况修改
    const token = util.cookies.get('token');
    if (token && token !== 'undefined') {
      next();
    } else {
      // 没有登录的时候跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    // 不需要身份校验 直接通过
    next();
  }
  next();
});

router.afterEach(to => {
  // 更改标题
  const { title } = to.meta
  util.title(title);
  // 返回页面顶端
  window.scrollTo(0, 0);
});

export default router;

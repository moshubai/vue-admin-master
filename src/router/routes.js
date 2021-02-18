import PageLayout from '@/pageLayout/index'
import allworks from './modules/allworks'
import leaderboard from './modules/leaderboard'
/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: {
      name: 'home-page-index'
    },
    component: PageLayout,
    children: [
      {
        path: '/home',
        name: 'home-page-index',
        icon: 'md-home',
        meta: {
          auth: true,
          title: '首页'
        },
        component: () => import('@/pages/home/index.vue')
      },
      ...allworks,
      ...leaderboard
    ]
  }
];

/**
 * 错误页面
 */

const errorPage = [
  {
    path: '/403',
    name: '403',
    meta: {
      title: '403'
    },
    component: () => import('@/pages/system/error/403/index.vue')
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '500'
    },
    component: () => import('@/pages/system/error/500/index.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@/pages/system/error/404/index.vue')
  }
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn
// 重新组织后导出
export default [
  ...frameIn,
  ...errorPage
];

import PageLayout from '@/pageLayout/index'
import map from './modules/map'
import card from './modules/card'
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
      ...map,
      ...card
      // 刷新页面 必须保留
      // {
      //     path: 'refresh',
      //     name: 'refresh',
      //     hidden: true,
      //     component: {
      //         beforeRouteEnter (to, from, next) {
      //             next(instance => instance.$router.replace(from.fullPath));
      //         },
      //         render: h => h()
      //     }
      // },
      // 页面重定向 必须保留
      // {
      //     path: 'redirect/:route*',
      //     name: 'redirect',
      //     hidden: true,
      //     component: {
      //         beforeRouteEnter (to, from, next) {
      //             next(instance => instance.$router.replace(JSON.parse(from.params.route)));
      //         },
      //         render: h => h()
      //     }
      // }
    ]
  }
];

/**
 * 在主框架之外显示
 */

const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
      title: '登陆'
    },
    component: () => import('@/pages/account/login')
  },
  // 登出
  {
    path: '/forgetpassword',
    name: 'ForgetPasswordPage',
    meta: {
      title: '忘记密码'
    },
    component: () => import('@/pages/account/forgetpassword')
  },
  // 注册
  {
    path: '/register',
    name: 'RegisterPage',
    meta: {
      auth: true,
      title: '注册'
    },
    component: () => import('@/pages/account/register')
  }
];

/**
 * 错误页面
 */

// const errorPage = [
//     {
//         path: '/403',
//         name: '403',
//         meta: {
//             title: '403'
//         },
//         component: () => import('@/pages/system/error/403')
//     },
//     {
//         path: '/500',
//         name: '500',
//         meta: {
//             title: '500'
//         },
//         component: () => import('@/pages/system/error/500')
//     },
//     {
//         path: '*',
//         name: '404',
//         meta: {
//             title: '404'
//         },
//         component: () => import('@/pages/system/error/404')
//     }
// ];

// 导出需要显示菜单的
export const frameInRoutes = frameIn
// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut
];

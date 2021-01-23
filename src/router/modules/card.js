const meta = {
  auth: true
};
export default [
  {
    path: '/card',
    name: 'card-page-index',
    svgIcon: 'card',
    meta: {
      ...meta,
      title: '卡片'
    },
    component: () => import('@/pages/card/index.vue')
  }
]

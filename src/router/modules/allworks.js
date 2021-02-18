const meta = {
  auth: false
};
export default [
  {
    path: '/allworks',
    name: 'allworks-page',
    meta: {
      ...meta,
      title: '全部作品'
    },
    component: () => import('@/pages/allworks/index.vue')
  }
]

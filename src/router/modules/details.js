const meta = {
  auth: false
};
export default [
  {
    path: '/details/:id',
    name: 'details-page',
    hidden: true,
    meta: {
      ...meta,
      title: '详情'
    },
    component: () => import('@/pages/details/index.vue')
  }
]

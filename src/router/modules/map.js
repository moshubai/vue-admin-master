const meta = {
  auth: true
};
export default [
  {
    path: '/map',
    name: 'map-page-index',
    svgIcon: 'map',
    meta: {
      ...meta,
      title: '地图'
    },
    component: () => import('@/pages/map/index.vue')
  }
]

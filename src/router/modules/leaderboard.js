const meta = {
  auth: false
};
export default [
  {
    path: '/leaderboard',
    name: 'leaderboard-page',
    meta: {
      ...meta,
      title: '排行榜'
    },
    component: () => import('@/pages/leaderboard/index.vue')
  }
]

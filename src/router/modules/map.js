const meta = {
    auth: true
};
export default [
    {
        path: '/map',
        name: 'Map-index',
        meta: {
            meta,
            title: '地图'
        },
        component: () => import('@/pages/map/index.vue')
    }
]

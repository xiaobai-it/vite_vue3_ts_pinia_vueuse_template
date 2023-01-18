import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/view/myIndex.vue'),
    },
    {
        path: '/vueUse',
        name: 'vueUse',
        meta: {
            title: '测试vueUse库',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/view/vueUse.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

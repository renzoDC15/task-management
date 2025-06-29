import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
    {
        path: '/login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/register',
        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/',
        redirect: '/login', // or '/dashboard' if already logged in
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore()
    if (to.meta.requiresAuth && !auth.user) {
        await auth.fetchUser().catch(() => null)
        if (!auth.user) return next('/login')
    }
    next()
})

export default router

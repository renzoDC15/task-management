import { defineStore } from 'pinia'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
    }),

    actions: {
        async getCSRFToken() {
            await api.get('/sanctum/csrf-cookie')
        },

        async login(data) {
            await axios.get('/sanctum/csrf-cookie') // if using Laravel Sanctum
            const res = await axios.post('/api/auth/login', data)
            this.user = res.data.user
        },

        async register(form) {
            await this.getCSRFToken()
            await api.post('/register', form)
            await this.login({ email: form.email, password: form.password })
        },

        async fetchUser() {
            const res = await api.get('/me')
            this.user = res.data
        },

        async logout() {
            await api.post('/logout')
            this.user = null
            this.token = null
        }
    }
})

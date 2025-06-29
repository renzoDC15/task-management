<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow">
      <h1 class="text-2xl font-bold text-center text-gray-900">Task Management</h1>
      <p class="mt-1 text-sm text-center text-gray-500">Sign in to your account</p>

      <form class="mt-6 space-y-4" @submit.prevent="submit">
        <BaseInput
            v-model="form.email"
            id="email"
            label="Email address"
            type="email"
            required
        />

        <PasswordInput v-model="form.password" id="password" label="Password" required />


        <div class="flex items-center justify-between">
          <label class="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" class="rounded border-gray-300" />
            <span>Remember me</span>
          </label>
          <a href="#" class="text-sm text-indigo-600 hover:underline">Forgot password?</a>
        </div>

        <button
            type="submit"
            class="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Sign in
        </button>
      </form>

      <p class="mt-6 text-sm text-center text-gray-600">
        Don't have an account?
        <router-link to="/register" class="text-indigo-600 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/BaseInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = reactive({
  email: '',
  password: '',
})

async function submit() {
  await auth.login(form)
  router.push('/dashboard')
}
</script>

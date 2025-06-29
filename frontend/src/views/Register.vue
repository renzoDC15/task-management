<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 shadow rounded-xl">
      <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>

      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
              v-model="form.email"
              type="email"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
              v-model="form.password"
              type="password"
              class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
          />
        </div>

        <div>
          <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              :disabled="loading"
          >
            <span v-if="loading">Logging in...</span>
            <span v-else>Login</span>
          </button>
        </div>

        <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const form = reactive({
  email: '',
  password: '',
})

const loading = ref(false)
const error = ref(null)
const auth = useAuthStore()
const router = useRouter()

async function submit() {
  loading.value = true
  error.value = null

  try {
    await auth.login(form)
    router.push('/dashboard')
  } catch (e) {
    error.value = e.response?.data?.message || 'Login failed.'
  } finally {
    loading.value = false
  }
}
</script>

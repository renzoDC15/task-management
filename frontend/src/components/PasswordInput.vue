<template>
  <div class="w-full text-left">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="relative flex w-full rounded-md shadow-sm border border-gray-300 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden">
      <input
          :id="id"
          :type="visible ? 'text' : 'password'"
          :required="required"
          :placeholder="placeholder"
          :name="name"
          class="flex-1 px-3 py-3 text-sm border-none focus:ring-0 focus:outline-none rounded-l-md"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
          type="button"
          @click="toggleVisibility"
          class="px-3 flex items-center justify-center bg-white border-l border-gray-200 rounded-r-md text-gray-500 hover:text-gray-700 "
      >
        <EyeIcon v-if="!visible" class="w-5 h-5" />
        <EyeSlashIcon v-else class="w-5 h-5" />
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/20/solid'

defineProps({
  modelValue: String,
  id: {
    type: String,
    default: 'password',
  },
  name: {
    type: String,
    default: 'password',
  },
  label: {
    type: String,
    default: 'Password',
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:modelValue'])
const visible = ref(false)

function toggleVisibility() {
  visible.value = !visible.value
}
</script>

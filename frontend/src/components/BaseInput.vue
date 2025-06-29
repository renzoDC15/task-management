<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: String,
  label: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  internalValue.value = val
})

watch(internalValue, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <div class="mb-4 w-full text-left">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
        :id="id"
        :type="type"
        v-model="internalValue"
        :placeholder="placeholder"
        :required="required"
        class="block w-full rounded-md border border-gray-300 shadow-sm focus-within:ring-1 focus-within:ring focus-within:border sm:text-sm px-3 py-3"
    />
  </div>
</template>

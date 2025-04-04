<template>
    <button
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      :type="type"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
  }>()
  </script>
  
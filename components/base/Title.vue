<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <h1 class="text-2xl font-bold">
    {{ title }}
  </h1>
</template>

<script setup>
useHead({
  title: 'Dashboard',
})

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})
</script>

<template>
  <div>
    <BaseTitle title="Dashboard" />
  </div>
</template>

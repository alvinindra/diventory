<script setup>
useHead({
  title: 'Kelola Akun',
})

definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
})
</script>

<template>
  <div>
    <BaseTitle title="Kelola Akun" />
    <UCard class="mt-5">
      <ManageUsers />
    </UCard>
  </div>
</template>

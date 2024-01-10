<script setup>
definePageMeta({
  layout: 'dashboard',
})

const userData = process.client && JSON.parse(window.localStorage.getItem('userData'))

async function getRedirected() {
  if (userData.jabatan === 'karyawan')
    await navigateTo('/inventory')

  else
    await navigateTo('/manage/goods')
}

getRedirected()
</script>

<template>
  <div>
    Dashboard
  </div>
</template>

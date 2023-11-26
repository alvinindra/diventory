<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Diventory` : 'Diventory'
  },
  link: [{ rel: 'icon', type: 'image/svg', href: '/image/logo-base.svg' }],
  meta: [
    { name: 'description', content: 'Diventory adalah sistem inventori yang dibuat untuk mengelola barang yang ada di perusahaan Dicoding Indonesia.' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
h1,h2,h3,h4,h5,h6 {
  @apply text-diventory-black-primary;
}

::selection {
  @apply bg-diventory-primary-100;
}
</style>

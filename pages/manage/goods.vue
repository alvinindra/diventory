<script setup>
useHead({
  title: 'Kelola Barang',
  script: [
    { src: 'https://unpkg.com/html5-qrcode' },
  ],
})

definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <div>
    <BaseTitle title="Kelola Barang" />
    <UCard class="mt-5">
      <template #header>
        <div class="d-flex">
          <div
            class="text-base py-3 px-5 text-diventory-primary-600 font-medium border-b-2 border-diventory-primary-600 max-w-fit"
          >
            Data Barang
          </div>
        </div>
      </template>

      <ManageGoodsData />
    </UCard>
  </div>
</template>

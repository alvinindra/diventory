<script setup>
const columns = [{
  key: 'nama_barang',
  label: 'Jenis Barang',
}, {
  key: 'jumlah_barang',
  label: 'Jumlah Barang',
}]

const { data: stocksData } = await useCustomFetch('/api/stock/', { method: 'GET' })

const q = ref('')
const filteredRows = computed(() => {
  if (!q.value)
    return stocksData.value

  return stocksData.value.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

const isQrCodeActive = ref(false)
const showModalDelete = ref(false)
</script>

<template>
  <div class="flex px-3 pb-3.5 border-b border-gray-200 dark:border-gray-700">
    <UInput v-model="q" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search" />
    <UButton icon="i-mdi-line-scan" class="ms-auto bg-diventory-primary-100 text-diventory-primary-600 hover:bg-diventory-primary-200" variant="solid" label="Scan Barang" @click="isQrCodeActive = !isQrCodeActive" />
  </div>
  <ClientOnly>
    <UTable :rows="filteredRows" :columns="columns">
      <template #status-data="{ row }">
        <UBadge class="text-diventory-green-500 ring-diventory-green-500" variant="outline">
          {{ row.status }}
        </UBadge>
      </template>
    </UTable>
  </ClientOnly>
  <UModal v-model="isQrCodeActive">
    <div class="flex px-5 pt-5 pb-4">
      <div class="my-auto font-bold text-xl">
        Scan Barang
      </div>
      <UButton class="ms-auto my-auto p-0" variant="ghost" @click="isQrCodeActive = false">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22705 7.22705L16.773 16.773" stroke="#3A3A3C" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.22705 16.773L16.773 7.22707" stroke="#3A3A3C" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </UButton>
    </div>
    <div>
      <BaseQrCodeScanner
        :active="isQrCodeActive"
        :qrbox="250"
        :fps="10"
      />
    </div>
  </UModal>
  <BaseModalDelete :show="showModalDelete" @close="showModalDelete = false" />
</template>
